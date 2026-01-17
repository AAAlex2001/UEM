from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
from enum import Enum


class TelegramEnum(str, Enum):
    """Перечисление статусов для сообщений в телеграм."""
    
    PENDING = "pending"
    SENT = "sent"
    FAILED = "failed"


class TelegramMessageRequest(BaseModel):
    """Схема запроса для отправки сообщения через телеграм."""
    
    chat_id: int = Field(..., description="Идентификатор чата в Телеграм.")
    name: Optional[str] = Field(None, description="Имя отправителя.")
    last_name: Optional[str] = Field(None, description="Фамилия отправителя.")
    email: Optional[EmailStr] = Field(None, description="Email отправителя.")
    phone: Optional[str] = Field(None, description="Телефон отправителя.")
    group: Optional[str] = Field(None, description="Группа студента.")
    profession: Optional[str] = Field(None, description="Профессия/должность.")
    status: TelegramEnum = Field(TelegramEnum.PENDING, description="Статус сообщения.")
    created_at: Optional[datetime] = Field(None, description="Дата и время создания сообщения.")


class TelegramMessageData(BaseModel):
    """Данные, возвращаемые после отправки сообщения в Телеграм."""

    chat_id: int = Field(..., description="Идентификатор чата в Телеграм.")
    status: TelegramEnum = Field(..., description="Статус отправки сообщения.")
    message_id: Optional[int] = Field(None, description="ID сообщения в Телеграм, если успешно отправлено.")
    sent_at: Optional[datetime] = Field(None, description="Время отправки сообщения (UTC).")
    profession: Optional[str] = Field(None, description="Профессия/должность.")


class TelegramMessageResponse(BaseModel):
    """Обёртка ответа с полем data."""

    data: TelegramMessageData
