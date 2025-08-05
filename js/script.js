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


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          showToast("success");
        } else {
          showToast("error");
        }
      })
      .catch(() => {
        showToast("error");
      });

    function showToast(type) {
      const toast =
        type === "success"
          ? document.getElementById("toast-success")
          : document.getElementById("toast-error");

      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 4000);
    }
  });

