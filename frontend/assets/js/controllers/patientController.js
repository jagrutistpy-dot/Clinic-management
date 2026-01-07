import { addPatient, getPatients } from "../services/patientService.js";
import { $ } from "../utils/dom.js";

export function initPatientController() {
  const form = $("patient-form");
  const btn = $("add-patient-btn");

  if (!btn) return;

  btn.addEventListener("click", async () => {
    const data = {
      name: $("patient-name").value,
      age: $("patient-age").value,
      gender: $("patient-gender").value,
      contact: $("patient-contact").value
    };

    await addPatient(data);
    loadPatients();
  });

  loadPatients();
}

async function loadPatients() {
  const patients = await getPatients();
  const tbody = $("patient-table-body");
  tbody.innerHTML = "";

  patients.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td>${p.contact}</td>
      </tr>
    `;
  });
}
