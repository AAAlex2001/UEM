from fastapi import HTTPException
from helpers.email import send_student_email
from schemas.student_email import StudentEmailRequest


class StudentEmailService:
    """Сервис для отправки писем студентам"""
    
    async def send_email(self, data: StudentEmailRequest) -> dict:
        """
        Отправляет письмо студенту по шифру
        
        Args:
            data: Данные запроса (шифр студента, тема, текст)
            
        Returns:
            dict: Результат отправки с email адресом. pokrovskiy.aa@pers.spmi.ru
        """
        try:
            # Формируем email адрес
            email = f"{data.student_code}@pers.spmi.ru"
            
            # Отправляем письмо
            await send_student_email(
                student_code=data.student_code,
                subject=data.subject,
                body=data.body
            )
            
            return {
                "message": "Письмо успешно отправлено",
                "email": email
            }
            
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Ошибка при отправке письма: {str(e)}"
            )
