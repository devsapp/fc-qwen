import time
import os
from typing import Generator, Union
from fastapi.responses import JSONResponse
from sse_starlette.sse import EventSourceResponse
from dashscope import Generation
from dashscope.api_entities.dashscope_response import GenerationResponse
from schema import *

gen = Generation()
model = os.getenv("MODEL_NAME") or Generation.Models.qwen_v1
max_tokens = int(os.getenv("MAX_TOKENS") or "1500")

def stream_chat(messages:list, max_length:int):
    '''
    stream chat
    '''
    created = int(time.time())
    responses = gen.call(
        model=model,
        messages=to_qwen_message(messages),
        result_format='message',  # set the result is message format.
        stream=True,
        max_length=max_length if max_length <= max_tokens else max_tokens,
    )
    return EventSourceResponse(generate(responses, created), media_type="text/event-stream")

def generate(resps:Generator[GenerationResponse, None, None], created:int):
    '''
    stream response iter
    '''
    cur_msg = ""
    request_id = ""
    for resp in resps:
        cur_msg, resp_json = to_stream_response(resp, created, cur_msg)
        request_id = resp.request_id
        yield resp_json
    yield to_stream_end_response(request_id, created)
    yield "[DONE]"

def chat(messages:list[ChatCompletionMessage], max_length:int) -> ChatCompletion:
    '''
    no stream chat
    '''
    created = int(time.time())
    response = gen.call(
        model=model,
        messages=to_qwen_message(messages),
        result_format='message',  # set the result is message format.
        stream=False,
        max_length=max_length if max_length <= max_tokens else max_tokens,
    )
    if response.status_code == 200:
        return JSONResponse(content=to_response(response,created))
    else:
        return JSONResponse(content={"message":response.message}, status_code=500)

def to_response(input:GenerationResponse, created:int):
    '''
    Qwen respone to standard response
    '''
    # check valid
    output = input.output
    if not output or not output.choices or not output.choices[0].message:
        # invalid return
        return {}
    message =  output.choices[0].message
    finish_reason = output.choices[0].finish_reason
    choice = ChatCompletionChoice(index=0, message=ChatCompletionMessage(
        role="assistant", content=message.content), finish_reason=finish_reason)
    resp = ChatCompletion(
        id=input.request_id, created=created, model=model, choices=[choice],
        object="chat.completion")
    return resp.model_dump_json(exclude_unset=True)

def to_stream_response(input:GenerationResponse, created:int, cur_msg:str):
    '''
    Qwen respone to standard response
    '''
    # check valid
    output = input.output
    if not output or not output.choices or not output.choices[0].message:
        # invalid return
        return "", {}
    content =  output.choices[0].message.content
    delta_content = content[len(cur_msg):]
    choice = ChatCompletionChunkChoice(index=0, delta=ChatCompletionChunkDelta(
        role="assistant", content=delta_content),finish_reason="null")
    resp = ChatCompletionChunk(
        id=input.request_id, created=created, model=model, choices=[choice],
        object="chat.completion.chunk")
    return content, resp.model_dump_json(exclude_unset=True)

def to_stream_end_response(request_id:str, created:int):
    '''
    Qwen respone to standard response
    '''
    choice = ChatCompletionChunkChoice(index=0, delta=ChatCompletionChunkDeltaEmpty(), finish_reason="stop")
    resp = ChatCompletionChunk(
        id=request_id, created=created, model=model, choices=[choice],
        object="chat.completion.chunk")
    return resp.model_dump_json(exclude_unset=True)

def to_qwen_message(messages:list[ChatCompletionMessage]):
    msg = []
    pre_role = ""
    for message in messages:
        role = message.role
        content = message.content
        if content == "":
            continue
        if pre_role == "" or role != pre_role:
            if role == "system" and len(msg) >= 1:
                continue
            msg.append({"role" : message.role, "content" : content})
            pre_role = role
        else:
            msg[-1]["content"] += " " + content
    return msg
