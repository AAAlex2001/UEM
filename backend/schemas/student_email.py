from pydantic import BaseModel, Field


class StudentEmailRequest(BaseModel):
    """Запрос на отправку письма студенту"""
    student_code: str = Field(..., description="Шифр студента (например, 201109)", min_length=1)
    subject: str = Field(..., description="Тема письма", min_length=1)
    body: str = Field(..., description="Текст письма", min_length=1)


class StudentEmailResponse(BaseModel):
    """Ответ на запрос отправки письма"""
    message: str
    email: str
