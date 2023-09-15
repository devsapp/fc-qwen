from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from dashscope import Generation

from schema import *
import qwen

def create_app():
    app = FastAPI()

    @app.get("/")
    def index():
        """Redirect to docs."""
        return RedirectResponse(url="/docs")

    @app.post("/v1/chat/completions",)
    async def create_chat_completion(
            body: CreateChatCompletionRequest,
    ):
        """Create a chat completion."""
        stream = body.stream
        if stream:
            return qwen.stream_chat(body.messages, body.max_tokens)
        else:
            return qwen.chat(body.messages, body.max_tokens)
    return app