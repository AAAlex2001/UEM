import os
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Загружаем переменные окружения
load_dotenv()

EMAIL_HOST = os.getenv("EMAIL_HOST", "smtp.mail.ru")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", "465"))
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD")

if not EMAIL_HOST_USER or not EMAIL_HOST_PASSWORD:
    raise RuntimeError("EMAIL_HOST_USER or EMAIL_HOST_PASSWORD is not set in environment")


async def send_student_email(student_code: str, subject: str, body: str) -> None:
    """Отправляет письмо студенту по шифру (принудительно IPv4)

    Args:
        student_code: Шифр студента (например, 201109 или pokrovskiy_aa)
        subject: Тема письма
        body: Текст письма
    """
    email = f"{student_code}@pers.spmi.ru"

    message = MIMEMultipart()
    message["From"] = EMAIL_HOST_USER
    message["To"] = email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))

    try:
        await aiosmtplib.send(
            message,
            hostname=EMAIL_HOST,
            port=EMAIL_PORT,
            username=EMAIL_HOST_USER,
            password=EMAIL_HOST_PASSWORD,
            use_tls=True,
            source_address=("0.0.0.0", 0),
        )

        print(f"✅ Email успешно отправлен на {email}")

    except Exception as e:
        print(f"❌ Ошибка при отправке email: {str(e)}")
        raise
