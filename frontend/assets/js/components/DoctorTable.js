import { deleteDoctor } from "../services/doctorService.js";

export function DoctorTable(doctors) {
  return `
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Specialization</th><th>Schedule</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${doctors.map(d => `
          <tr>
            <td>${d.name}</td>
            <td>${d.specialization}</td>
            <td>${d.schedule}</td>
            <td>
              <button onclick="removeDoctor(${d.id})">Delete</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

window.removeDoctor = id => {
  deleteDoctor(id);
  location.reload();
};
