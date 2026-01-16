from datetime import datetime
from enum import Enum
from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import DateTime, String


class TelegramENUM(str, Enum):
    PENDING = "pending"
    SENT = "sent"
    FAILED = "failed"


class TelegramBase:
    chat_id: Mapped[int]
    name: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    email: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    phone: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    status: Mapped[str] = mapped_column(String(50), default="pending")


class TelegramCreate(TelegramBase):
    pass
