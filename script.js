function showSection(id) {
  document.querySelectorAll("main section").forEach((section) => {
    section.classList.add("hidden");
    section.classList.remove("show");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
  setTimeout(() => {
    selected.classList.add("show");
  }, 50);
}

window.onload = () => {
  showSection('about');
};
// 🚀 Scrollspy Script
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.getElementById(`link-${id}`);
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active-link"));
        link.classList.add("active-link");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));
