"""This module defines the schemas for the API."""
# pylint: disable=too-few-public-methods
from typing import List, Optional, Union
from typing_extensions import Literal, NotRequired, TypedDict
from pydantic import BaseModel, Field, validator  # pylint: disable = no-name-in-module


class ChatCompletionChunkDelta(TypedDict):
    """Delta Message for Chat Completion Stream Response"""
    role: NotRequired[Literal["assistant"]]
    content: NotRequired[str]


class ChatCompletionChunkDeltaEmpty(TypedDict):
    """Empty Delta Message for Chat Completion Stream Response"""


class ChatCompletionChunkChoice(TypedDict):
    """Choice for Chat Completion Stream Response"""
    index: int
    delta: Union[ChatCompletionChunkDelta, ChatCompletionChunkDeltaEmpty]
    finish_reason: NotRequired[str]

class ChatCompletionChunk(BaseModel):
    """A chunk of a chat completion stream response."""
    id: str
    model: str
    object: Literal["chat.completion.chunk"]
    created: int
    choices: List[ChatCompletionChunkChoice]

class ChatCompletionMessage(BaseModel):
    """A message in a chat completion request."""
    role: Literal["system", "user", "assistant"] = Field(
        default="user", description="The role of the message."
    )
    content: str = Field(default="", description="The content of the message.")

class ChatCompletionChoice(TypedDict):
    """Choice for Chat Completion Response"""
    index: int
    message: ChatCompletionMessage
    finish_reason: NotRequired[str]


class ChatCompletion(BaseModel):
    """A chat completion response."""
    id: str
    object: Literal["chat.completion"]
    created: int
    model: str
    choices: List[ChatCompletionChoice]
    # usage: dict


class CreateChatCompletionRequest(BaseModel):
    """
    All parameters are ported from HuggingFace's `GenerationConfig`.
    The alias of parameters are meant to be consistent with OpenAI's API.
    See also [Text Generation](https://huggingface.co/docs/transformers/main/main_classes/text_generation)
    """
    messages: List[ChatCompletionMessage] = Field(
        default=[], description="A list of messages to generate completions for."
    )
    stream: bool = Field(default=False)
    # Parameters that control the length of the output
    max_tokens: Optional[int] = Field(default=1500)
    top_k: Optional[int] = Field(default=0)
    top_p: Optional[float] = Field(default=0.5)

    @validator("messages")
    def validate_messages(cls, messages: List[ChatCompletionMessage]):  # pylint: disable=no-self-argument
        """Validate messages"""
        if not messages:
            raise ValueError("At least one message must be provided.")
        return messages
