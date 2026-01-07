export async function initHomeController() {
  const patients = await fetch("/api/patients").then(r => r.json());
  const bills = await fetch("/api/billing").then(r => r.json());

  const table = document.getElementById("home-table");
  table.innerHTML = "";

  patients.forEach(p => {
    const total = bills
      .filter(b => b.patient_id == p.id)
      .reduce((sum, b) => sum + Number(b.amount), 0);

    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>₹ ${total}</td>
      </tr>
    `;
  });
}
