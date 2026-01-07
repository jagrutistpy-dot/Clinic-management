# Clinic-management



Frontend (JS + HTML)  →  Router (router.py / HTTPServer)  →  Controllers  →  Services  →  Database





CLINIC-MANAGEMENT/
│
├── app.py
├── router.py
├── clinic.db
├── README.md
├── test_commands.sh
├── .gitignore
│
├── controllers/                     # Backend Controllers (Python)
│   ├── __pycache__/
│   ├── billing.py
│   ├── doctors.py
│   └── patients.py
│
├── services/                        # Backend Services (Python)
│   ├── __pycache__/
│   ├── billing_service.py
│   ├── doctor_service.py
│   └── patient_service.py
│
├── core/                            # Backend Core Utilities
│   ├── __pycache__/
│   ├── middleware.py
│   ├── request.py
│   ├── responses.py
│   └── static.py
│
├── database/                        # Database Layer
│   ├── __pycache__/
│   ├── connection.py
│   ├── billing_queries.py
│   ├── doctor_queries.py
│   └── patient_queries.py
│
└── frontend/                        # Frontend
    │
    ├── assets/
    │   ├── css/
    │   │   └── style.css
    │   │
    │   └── js/
    │       ├── app.js               # Frontend entry point
    │       │
    │       ├── components/          # UI Components
    │       │   ├── Alert.js
    │       │   ├── BillingForm.js
    │       │   ├── BillingTable.js
    │       │   ├── DoctorForm.js
    │       │   ├── DoctorTable.js
    │       │   ├── PatientForm.js
    │       │   ├── PatientTable.js
    │       │   ├── Header.html
    │       │   └── Footer.html
    │       │
    │       ├── controllers/         # Frontend Controllers (JS)
    │       │   ├── billingController.js
    │       │   ├── doctorController.js
    │       │   └── patientController.js
    │       │
    │       ├── services/            # Frontend Services (JS)
    │       │   ├── billingService.js
    │       │   ├── doctorService.js
    │       │   └── patientService.js
    │       │
    │       ├── router/
    │       │   └── viewRouter.js
    │       │
    │       ├── state/
    │       │   └── store.js
    │       │
    │       └── utils/
    │         |  ├── dom.js
    │         |  └── loadComponent.js
    |         └── app.js               
    │
    ├── pages/                       # HTML Pages
    │   ├── index.html
    │   ├── home.html
    │   ├── doctors.html
    │   ├── patients.html
    │   ├── billing.html
    │   └── 404.html
    │
    └── env.js                       # Frontend Environment Config
