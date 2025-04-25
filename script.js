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
