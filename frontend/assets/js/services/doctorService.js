const BASE = "/api/doctors";

export async function getDoctors() {
  const res = await fetch(BASE);
  return res.json();
}

export async function createDoctor(data) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteDoctor(id) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "DELETE"
  });
  return res.json();
}
