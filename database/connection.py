# database/connection.py

import sqlite3
from pathlib import Path

DB_FILE = Path("clinic.db")

def get_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn


def init_database():
    conn = get_connection()
    cur = conn.cursor()

    # Patients table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        gender TEXT,
        contact TEXT,
        created_at TEXT,
        updated_at TEXT
    )
    """)

    # Doctors table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS doctors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        specialization TEXT,
        schedule TEXT,
        contact TEXT,
        created_at TEXT,
        updated_at TEXT
    )
    """)

    # Billing table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS billing (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_id INTEGER,
        doctor_attended TEXT,
        amount REAL,
        bill_date TEXT,
        created_at TEXT,
        updated_at TEXT
    )
    """)

    conn.commit()
    conn.close()
