from fastapi import HTTPException
import httpx
import os


class TelegramService:
    """Сервис для отправки данных через телеграм."""
    
    def __init__(self):
        self.bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
        if not self.bot_token:
            raise ValueError("TELEGRAM_BOT_TOKEN environment variable is not set")
        self.base_url = f"https://api.telegram.org/bot{self.bot_token}"

    async def send_message(self, chat_id: int, text: str) -> None:
        """Отправляет сообщение в телеграм чат.

        Args:
            chat_id (int): Идентификатор чата.
            text (str): Текст сообщения.

        Raises:
            HTTPException: Если произошла ошибка при отправке сообщения.
        """
        try:
            if chat_id is None or not text:
                raise ValueError("Chat ID and text must be provided")
            
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.post(
                    f"{self.base_url}/sendMessage",
                    json={"chat_id": chat_id, "text": text, "parse_mode": "HTML"}
                )
                # Capture response body for debugging
                raw = response.text
                status = response.status_code

                if status != 200:
                    raise HTTPException(status_code=502, detail=f"Telegram API returned {status}: {raw}")

                try:
                    result = response.json()
                except ValueError:
                    raise HTTPException(status_code=502, detail=f"Invalid JSON from Telegram: {raw}")

                if not result.get("ok"):
                    desc = result.get("description") or raw
                    raise HTTPException(status_code=502, detail=f"Telegram API error: {desc}")
                    
        except httpx.HTTPError as e:
            raise HTTPException(status_code=502, detail=f"Failed to send message to Telegram: {str(e)}")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")