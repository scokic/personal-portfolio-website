"use strict";

// -------------------------------------------- MOBILE MENU DROPDOWN --------------------------------------------

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
  stickyOnScroll();
  scrollToTop();
};

let sticky = header.offsetTop;

function stickyOnScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let scrollTopButton = document.querySelector(".scroll-to-top");
let scrollTopContainer = document.querySelector(".scroll-to-top-container");

// -------------------------------------------- SCROLL TO TOP BUTTON --------------------------------------------

scrollTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, Opera
});

function scrollToTop() {
  if (window.pageYOffset > 100) {
    scrollTopContainer.classList.add("visible");
  } else {
    scrollTopContainer.classList.remove("visible");
  }
}

// TODO: IMPROVE EXISTING SOLUTION
// -------------------------------------------- HOVER TOOL POPUP --------------------------------------------

const loadingPlaceholder = document.querySelectorAll(".tool-image-placeholder");

loadingPlaceholder.forEach((item) => {
  item.addEventListener("mouseover", function () {
    this.classList.remove("hidden");
  });
});

loadingPlaceholder.forEach((item) => {
  item.addEventListener("mouseout", function () {
    this.classList.add("hidden");
  });
});

// -------------------------------------------- SCROLL TO SECTION --------------------------------------------

let navButton = document.querySelectorAll(".nav-link");
let isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;

navButton.forEach((item) => {
  let scrollBlockTarget;
  scrollBlockTarget = "start";

  item.addEventListener("click", function (e) {
    e.preventDefault();

    let targetId = item.href.split("#")[1];
    let target = document.getElementById(targetId);

    target.scrollIntoView({
      behavior: "smooth",
      block: `${scrollBlockTarget}`,
    });

    header.classList.remove("nav-open");
  });
});
