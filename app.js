const toggleBtn = document.querySelector(".toggle");
const sidenav = document.querySelector(".side");
const body = document.querySelector("body");

// Toggle sidebar
toggleBtn.addEventListener("click", () => {
  sidenav.classList.toggle("open");
});
