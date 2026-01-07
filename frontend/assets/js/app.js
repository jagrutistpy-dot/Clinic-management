import { router } from "./router/viewRouter.js";
import { loadComponent } from "../utils/loadComponent.js";

window.addEventListener("DOMContentLoaded", async () => {
  // Load header and footer first
  await loadComponent("#header", "frontend/assets/js/components/Header.html");
  await loadComponent("#footer", "frontend/assets/js/components/Footer.html");

  // Then load SPA content
  router();
});
