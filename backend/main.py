"""
Главный файл FastAPI приложения
"""
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import student_email
from routes import telegram_rout

# Создание приложения FastAPI
app = FastAPI(
    title="UEM API",
    description="API для отдела УЭМ",
    version="1.0.0"
)

# Настройка CORS (разрешить запросы с фронтенда)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключение роутеров
app.include_router(student_email.router)
app.include_router(telegram_rout.router)

@app.get("/")
async def root():
    """Корневой эндпоинт"""
    return {"message": "UEM API", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    """Проверка здоровья приложения"""
    return {"status": "ok"}

