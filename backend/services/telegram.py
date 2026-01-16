from fastapi import HTTPException
import os
from aiogram import Bot
from aiogram.enums import ParseMode


class TelegramService:
    """Сервис для отправки данных через телеграм с помощью aiogram."""

    def __init__(self):
        self.bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
        if not self.bot_token:
            raise ValueError("TELEGRAM_BOT_TOKEN environment variable is not set")
        if Bot is None:
            raise ImportError("aiogram is required. Install it with `pip install aiogram`")
        self.bot = Bot(token=self.bot_token)

    async def send_message(self, chat_id: int, text: str) -> None:
        """Отправляет сообщение в телеграм чат через aiogram.Bot.

        Raises:
            HTTPException: при ошибке отправки.
        """
        if chat_id is None or not text:
            raise HTTPException(status_code=400, detail="chat_id and text are required")

        try:
            sent = await self.bot.send_message(chat_id=chat_id, text=text, parse_mode=ParseMode.HTML)
            message_id = getattr(sent, "message_id", None)
            sent_date = getattr(sent, "date", None)
            return {"message_id": message_id, "sent_at": sent_date}
        except Exception as e:
            raise HTTPException(status_code=502, detail=f"Failed to send message via aiogram: {str(e)}")