from fastapi import APIRouter
from schemas.student_email import StudentEmailRequest, StudentEmailResponse
from services.student_email import StudentEmailService

router = APIRouter(prefix="/student-email", tags=["email"])


@router.post("/send", response_model=StudentEmailResponse)
async def send_student_email_endpoint(data: StudentEmailRequest):
    """
    Отправляет письмо студенту по шифру
    
    Формирует email адрес в формате: s{шифр}@stud.spmi.ru
    Например, для шифра 201109: s201109@stud.spmi.ru
    """
    service = StudentEmailService()
    result = await service.send_email(data)
    return result
