document.documentElement.classList.add("js");

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveal animations
const scrollSections = document.querySelectorAll(".section-scroll-animate");
if (scrollSections.length) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    scrollSections.forEach(section => observer.observe(section));
  } else {
    scrollSections.forEach(section => section.classList.add("in-view"));
  }
}

// Active link highlight
const normalizePath = path => path.replace(/\/+$/, "");
const isIndexPath = path =>
  path === "" || path === "/" || path.endsWith("/index.html");
const currentPath = normalizePath(window.location.pathname);
const isBlogPath = currentPath.includes("/blogs/");

document.querySelectorAll(".menu a, .mobile-menu a").forEach(a => {
  const href = a.getAttribute("href");
  if (!href) return;
  let resolvedPath;
  try {
    resolvedPath = normalizePath(new URL(href, window.location.href).pathname);
  } catch {
    return;
  }
  if (
    resolvedPath === currentPath ||
    (isIndexPath(resolvedPath) && isIndexPath(currentPath)) ||
    (isBlogPath && resolvedPath.endsWith("/blogs/index.html"))
  ) {
    a.classList.add("active");
  }
});
