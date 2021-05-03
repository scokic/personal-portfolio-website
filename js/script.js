// "use strict";

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

// When the user scrolls down 20px from the top of the document, show the button

let scrollTopButton = document.querySelector(".scroll-to-top");
let scrollTopContainer = document.querySelector(".scroll-to-top-container");

// Scroll to top button

scrollTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE, Opera
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 100) {
    scrollTopContainer.classList.add("visible");
  } else {
    scrollTopContainer.classList.remove("visible");
  }
}

// POTREBNO SMISLITI DRUGO REŠENJE ZA OVO
// Hover tool popup

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

// Scroll to section

let navButton = document.querySelectorAll(".nav-link");
let isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;

navButton.forEach((item) => {
  let scrollBlockTarget;
  if (isMobile) {
    scrollBlockTarget = "start";
  } else {
    scrollBlockTarget = "center";
  }

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

// this is a branching test
