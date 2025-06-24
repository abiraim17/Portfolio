var typed = new Typed(".text", {
  strings: ["Frontend developer", "UI/UX Designer", "SE Undergraduate"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
