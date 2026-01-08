export async function loadComponent(selector, filePath) {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
        const response = await fetch(filePath);
        element.innerHTML = await response.text();
    } catch (e) {
        console.error("Component load failed:", filePath);
    }
}
