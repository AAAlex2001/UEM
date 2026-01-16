from fastapi import APIRouter, Depends, HTTPException
from schemas.telegram_schemas import TelegramMessageRequest
from services.telegram import TelegramService

router = APIRouter()

def get_telegram_service() -> TelegramService:
    """Фабрика для создания TelegramService."""
    return TelegramService()

@router.post("/send-message", summary="Отправить сообщение в Телеграм")
async def send_telegram_message(
    message_request: TelegramMessageRequest,
    telegram_service: TelegramService = Depends(get_telegram_service),
) -> dict:
    """Эндпоинт для отправки сообщения в Телеграм чат.
    """
    try:
        text_parts = ["<b>📝 Новая заявка с сайта</b>\n"]
        
        if message_request.name:
            text_parts.append(f"<b>Имя:</b> {message_request.name}")
        if message_request.last_name:
            text_parts.append(f"<b>Фамилия:</b> {message_request.last_name}")
        if message_request.email:
            text_parts.append(f"<b>Email:</b> {message_request.email}")
        if message_request.phone:
            text_parts.append(f"<b>Телефон:</b> {message_request.phone}")
        if message_request.group:
            text_parts.append(f"<b>Группа:</b> {message_request.group}")
        
        text_parts.append(f"\n<b>Статус:</b> {message_request.status.value}")
        
        if message_request.created_at:
            text_parts.append(f"<b>Дата:</b> {message_request.created_at.strftime('%d.%m.%Y %H:%M')}")
        
        text = "\n".join(text_parts)
        
        await telegram_service.send_message(
            chat_id=message_request.chat_id,
            text=text
        )
        return {"detail": "Message sent successfully"}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send message")