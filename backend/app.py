import random
import time
from dataclasses import dataclass
from typing import Dict, Optional

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

EMAIL_DOMAIN = "stud.spmi.ru"
CODE_TTL_SECONDS = 5 * 60  # 5 minutes


@dataclass
class CodeRecord:
    code: str
    expires_at: float


code_store: Dict[str, CodeRecord] = {}


def sanitize_cipher(raw_cipher: Optional[str]) -> Optional[str]:
    """Return a normalized 6-digit cipher or None if invalid."""
    if raw_cipher is None:
        return None
    cleaned = str(raw_cipher).strip()
    if len(cleaned) != 6 or not cleaned.isdigit():
        return None
    return cleaned


def build_email(cipher: str) -> str:
    return f"s{cipher}@{EMAIL_DOMAIN}"


def generate_code() -> str:
    return f"{random.randint(0, 999_999):06d}"


@app.post("/api/send-code")
def send_code():
    payload = request.get_json(silent=True) or {}
    cipher = sanitize_cipher(payload.get("cipher"))
    if not cipher:
        return jsonify({"error": "cipher must be a 6-digit number"}), 400

    email = build_email(cipher)
    code = generate_code()
    expires_at = time.time() + CODE_TTL_SECONDS
    code_store[email] = CodeRecord(code=code, expires_at=expires_at)

    return jsonify(
        {
            "email": email,
            "code": code,
            "expiresInSeconds": CODE_TTL_SECONDS,
            "note": "Mock mode: email not actually sent.",
        }
    )


@app.get("/api/pending-codes/<cipher>")
def get_pending_code(cipher: str):
    normalized = sanitize_cipher(cipher)
    if not normalized:
        return jsonify({"error": "cipher must be a 6-digit number"}), 400

    email = build_email(normalized)
    record = code_store.get(email)

    if not record or record.expires_at < time.time():
        code_store.pop(email, None)
        return jsonify({"error": "No active code for this email."}), 404

    return jsonify(
        {
            "email": email,
            "code": record.code,
            "expiresAt": record.expires_at,
        }
    )


if __name__ == "__main__":
    port = int(app.config.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)





