import { createDoctor } from "../services/doctorService.js";

document.addEventListener("submit", async (e) => {
  if (e.target.id === "doctorForm") {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      specialization: document.getElementById("specialization").value,
      schedule: document.getElementById("schedule").value,
      contact: document.getElementById("contact").value
    };

    await createDoctor(data);

    e.target.reset();
    location.reload();
  }
});
