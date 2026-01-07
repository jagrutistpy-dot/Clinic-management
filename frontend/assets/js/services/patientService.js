export async function getPatients() {
  return fetch("/api/patients").then(r => r.json());
}

export async function addPatient(data) {
  return fetch("/api/patients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
