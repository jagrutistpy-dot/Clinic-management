import { loadComponent } from "./utils/loadComponent.js";
import { router } from "./router/viewRouter.js";

window.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("#header", "../assets/js/components/Header.html");
    await loadComponent("#footer", "../assets/js/components/Footer.html");

    router();
    window.addEventListener("hashchange", router);
});
