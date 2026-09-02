// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll(".section");
const navLinkEls = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinkEls.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { rootMargin: "-50% 0px -50% 0px" });

sections.forEach(section => observer.observe(section));