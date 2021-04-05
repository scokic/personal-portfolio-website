// Mobile menu dropdown

let hamburger = document.querySelector(".hamburger");
let header = document.querySelector(".header");

hamburger.addEventListener("click", function () {
  if (header.classList.contains("nav-open")) {
    header.classList.remove("nav-open");
  } else {
    header.classList.add("nav-open");
  }
});

// Sticky on scroll
window.onscroll = function () {
  scrollFunction();
};

let sticky = header.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
