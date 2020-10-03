let toggle = document.getElementById("nav-toggle");
toggle.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".navbar-nav").classList.toggle("open");
});
