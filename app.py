# app.py
from http.server import HTTPServer
from router import ClinicRouter
from database.connection import init_database

def run():
    # Initialize database tables
    init_database()

    server_address = ("", 8000)
    httpd = HTTPServer(server_address, ClinicRouter)

    print("🚀 Clinic Management Server running at http://localhost:8000")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
