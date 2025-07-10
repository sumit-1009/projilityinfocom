document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".custom-toggler");
  const navMenu = document.querySelector(".offcanvas-style");
  const navLinks = document.querySelectorAll(".nav-link");
  const logo = document.querySelector(".logo");

  if (toggler && navMenu) {
    toggler.addEventListener("click", () => {
      toggler.classList.toggle("active");
      navMenu.classList.toggle("show");
      logo.classList.toggle("logo-animate");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (toggler && navMenu.classList.contains("show")) {
        toggler.classList.remove("active");
        navMenu.classList.remove("show");
        logo.classList.remove("logo-animate");
      }
    });
  });
});
