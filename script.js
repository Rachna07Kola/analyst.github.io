// AOS library initialization
AOS.init({ duration: 1200 });

// Typed.js initialization
var typed = new Typed("#typed-text", {
  strings: [
    "Business Analyst",
    "Data Storyteller",
    "Decision-Maker",
    "Business Enthusiast"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Particles.js background initialization
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#38bdf8" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "move": { "speed": 2 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  }
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// GSAP animations for sections
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});
