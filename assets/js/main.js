/* =========================
   Mobile Navbar Toggle
========================= */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


/* =========================
   Active Navbar Link
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    // Close mobile menu after click
    navMenu.classList.remove("active");

  });
});


/* =========================
   Sticky Header
========================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 50);

});