import {
  getDoctors,
  deleteDoctor
} from "../services/doctorService.js";

export async function initDoctorController() {
  const doctors = await getDoctors();
  const table = document.getElementById("doctor-table");
  table.innerHTML = "";

  doctors.forEach(d => {
    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.specialization}</td>
        <td>${d.schedule}</td>
        <td>${d.contact || ""}</td>
        <td>
          <button class="btn btn-danger" onclick="handleDelete(${d.id})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

window.handleDelete = async function (id) {
  if (!confirm("Delete this doctor?")) return;
  await deleteDoctor(id);
  initDoctorController();
};
