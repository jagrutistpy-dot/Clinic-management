export async function initBillingController() {
  const res = await fetch("/api/billing");
  const bills = await res.json();

  const table = document.getElementById("billing-table");
  table.innerHTML = "";

  bills.forEach(b => {
    table.innerHTML += `
      <tr>
        <td>${b.patient_id}</td>
        <td>${b.doctor_attended}</td>
        <td>${b.amount}</td>
        <td>${b.bill_date}</td>
      </tr>
    `;
  });
}
