import { loadComponent } from "../utils/loadComponent.js";
import { initPatientController } from "../controllers/patientController.js";
import { initDoctorController } from "../controllers/doctorController.js";
import { initBillingController } from "../controllers/billingController.js";

// Routes and which HTML + JS controller to load
const routes = {
  "/": { page: "frontend/pages/home.html" },
  "/home": { page: "frontend/pages/home.html" },
  "/patients": { page: "frontend/pages/patients.html", init: initPatientController },
  "/doctors": { page: "frontend/pages/doctors.html", init: initDoctorController },
  "/billing": { page: "frontend/pages/billing.html", init: initBillingController }
};

export async function router() {
  const path = location.hash.replace("#", "") || "/";
  const route = routes[path];

  if (!route) {
    // 404 page
    await loadComponent("#app", "frontend/pages/404.html");
    return;
  }

  // Load main page content into <main id="app">
  await loadComponent("#app", route.page);

  // Initialize JS controller (patients, doctors, billing)
  if (route.init) route.init();
}

// Re-run router when hash changes
window.addEventListener("hashchange", router);
