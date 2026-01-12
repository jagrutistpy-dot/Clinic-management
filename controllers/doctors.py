from core.responses import send_json, send_404
from core.request import parse_json_body
from services.doctor_service import (
    get_doctors,
    get_doctor,
    create_doctor,
    update_doctor,
    delete_doctor
)


def get_all_doctors(handler):
    return send_json(handler, 200, get_doctors())


def get_single_doctor(handler, doctor_id):
    doctor = get_doctor(doctor_id)
    return send_json(handler, 200, doctor) if doctor else send_404(handler)


def create_new_doctor(handler):
    data = parse_json_body(handler)
    new_doctor = create_doctor(data)
    return send_json(handler, 201, new_doctor)


def update_existing_doctor(handler, doctor_id):
    data = parse_json_body(handler)
    updated = update_doctor(doctor_id, data)
    return send_json(handler, 200, updated) if updated else send_404(handler)


def delete_existing_doctor(handler, doctor_id):
    deleted = delete_doctor(doctor_id)
    return send_json(handler, 200, {"deleted": True}) if deleted else send_404(handler)
