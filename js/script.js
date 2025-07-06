document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("toggle-theme");
  const body = document.body;

  // Load stored theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.checked = true;
  }

  // Toggle theme and store preference
  themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // Add fade animation
    body.classList.add("theme-transition");
    setTimeout(() => body.classList.remove("theme-transition"), 500);
  });
});
