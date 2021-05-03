// Dark mode toggle

const body = document.getElementsByTagName("BODY")[0];
const darkThemeButton = document.querySelector("#dark-theme-toggle-container");

const sun = document.getElementById("dark-theme-sun");
const moon = document.getElementById("dark-theme-moon");

let themePrefCheck = window.matchMedia("prefers-color-scheme: dark");

if ((themePrefCheck = true)) {
  body.classList.add("dark");
}

darkThemeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
