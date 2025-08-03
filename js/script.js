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


  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default submission for manual handling

    const form = this;
    const toast = document.getElementById("toast");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
            form.reset();
          }, 4000);
        } else {
          alert("Oops! There was a problem.");
        }
      })
      .catch((error) => {
        alert("Oops! There was a problem submitting your form.");
      });
    });

