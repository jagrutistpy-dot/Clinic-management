from database.doctor_queries import (
    db_get_all,
    db_get_one,
    db_create,
    db_update,
    db_delete
)

def get_doctors():
    return db_get_all()

def get_doctor(doctor_id):
    return db_get_one(doctor_id)

def create_doctor(data):
    return db_create(data)

def update_doctor(doctor_id, data):
    return db_update(doctor_id, data)

def delete_doctor(doctor_id):
    return db_delete(doctor_id)
