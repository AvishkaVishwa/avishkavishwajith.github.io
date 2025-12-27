// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

// Active link highlight
const path = window.location.pathname.replace(/\/+$/, "");
document.querySelectorAll(".menu a, .mobile-menu a").forEach(a => {
  const href = a.getAttribute("href");
  if (!href) return;
  const target = href.startsWith("/") ? href : "/" + href;
  const targetClean = target.replace(/\/+$/, "");
  if (targetClean === path || (targetClean === "/index.html" && (path === "/" || path === ""))) {
    a.classList.add("active");
  }
});
