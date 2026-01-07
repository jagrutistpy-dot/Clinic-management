# A. Get All patients
curl -X GET "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/patients"

# B. Get One Patient
curl -X GET "http://localhost:8000/api/patients/1"

# C. Create Patient
curl -X POST "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/patients" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "age": 47,
    "gender": "Female",
    "contact": 9876542351
  }'

# D. Update Patient
curl -X PUT "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/patients/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "peggy",
    "age": 25,
    "gender": "Female",
    "contact": 9876542352
  }'

# E. Delete Patient
curl -X DELETE "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/patients/1"

#----------------------#
#-------DOCTOR---------#
#----------------------#

# A. Get All Doctors 
curl -X GET "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/doctors"

# B. Get One Doctor
curl -X GET "http://localhost:8000/api/doctors/1"


# C. Create Doctor
curl -X POST "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/doctors" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. srikant",
    "specialization": "surgery",
    "schedule": "Mon-Fri",
    "contact": 9876543215
  }'

# D. Update Doctor
curl -X PUT "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/doctors/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. srikant",
    "specialization": "surgery",
    "schedule": "Mon-Sat",
    "contact": 9876543215
  }'

# E. Delete Doctor
curl -X DELETE "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/doctors/1"

#----------------------#
#--------bill----------#
#----------------------#

# A. Get All Bills
curl -X GET "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/billing"

# B. Get One Bill
curl -X GET "http://localhost:8000/api/billing/1"

# C. Create Bills
curl -X POST "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/billing" \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": 1,
    "doctor_attended": "Dr. srikant",
    "amount": 1500,
    "bill_date": "2025-08-20"
  }'

# D. Update Bills
curl -X PUT "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/billing/1" \
  -H "Content-Type: application/json" \
  -d '{
    "patient_id": 1,
    "doctor_attended": "Nisha",
    "amount": 2000,
    "bill_date": "2025-08-25"
  }'

# E. Delete Bills
curl -X DELETE "https://automatic-space-tribble-69qvgrvg59r6h56wj-8000.app.github.dev/api/billing/1"



##################### DB Observation Via SQLite Web
- install https://github.com/coleifer/sqlite-web
- pip install sqlite-web
- sqlite_web clinic.db