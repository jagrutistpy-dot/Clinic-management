from database.doctor_queries import (
    insert_doctor,
    get_all_doctors,
    update_doctor,
    delete_doctor_by_id
)

def add_doctor(data):
    return insert_doctor(data)

def get_doctors():
    return get_all_doctors()

def edit_doctor(doctor_id, data):
    return update_doctor(doctor_id, data)

def remove_doctor(doctor_id):
    return delete_doctor_by_id(doctor_id)
