import '../styles/style.css';


const cards = document.querySelectorAll(".card, .card1");

cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = card.dataset.page;
    });
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




const sections = document.querySelectorAll("section, div#stack, footer");
const dots = document.querySelectorAll(".dot");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dots.forEach((dot) => dot.classList.remove("active"));

        const id = entry.target.id;
        const activeDot = document.querySelector(`.dot[href="#${id}"]`);

        if (activeDot) activeDot.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach((section) => observer.observe(section));