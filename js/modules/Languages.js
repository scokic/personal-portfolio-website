import englishTranslation from "../translation/English.js";
import serbianTranslation from "../translation/Serbian.js";

// -------------------------------------------- LANGUAGES TOGGLE --------------------------------------------

const body = document.getElementsByTagName("BODY")[0];
const langButton = document.querySelector("#language-toggle-container");

langButton.addEventListener("click", () => {
  body.classList.toggle("en");
});

const serbianLanguage = document.getElementById("serbian");
const englishLanguage = document.getElementById("english");

englishLanguage.addEventListener("click", renderEnglishContent);
serbianLanguage.addEventListener("click", renderSerbianContent);

function renderEnglishContent() {
  renderContent("English");
}

function renderSerbianContent() {
  renderContent("Serbian");
}

function renderContent(language) {
  if (language === "English") {
    language = englishTranslation;
  } else {
    language = serbianTranslation;
  }
  for (let [key, value] of Object.entries(language)) {
    let objectProperty = document.getElementById(`${key}`);
    objectProperty.textContent = `${value}`;
  }
}

renderSerbianContent();
