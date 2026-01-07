const BASE = "/api/billing";

export async function getBills() {
  return fetch(BASE).then(r => r.json());
}

export async function createBill(data) {
  return fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json());
}
