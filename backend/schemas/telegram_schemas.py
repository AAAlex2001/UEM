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
    status: TelegramEnum = Field(TelegramEnum.PENDING, description="Статус сообщения.")
    created_at: Optional[datetime] = Field(None, description="Дата и время создания сообщения.")
