// Language toggle

const body = document.getElementsByTagName("BODY")[0];
const langButton = document.querySelector("#language-toggle-container");

const english = document.getElementById("english");
const serbian = document.getElementById("serbian");

langButton.addEventListener("click", () => {
  body.classList.toggle("en");
});

// Language json fetch and UI replacing

// Sometimes: napraviti čuvanje varijable u lokalnom storage-u
// Sometimes: napraviti čitanje informacije iz lokalnog storage-a

// dohvatanje dugmića za promenu jezika

const serbianLanguage = document.getElementById("serbian");
const englishLanguage = document.getElementById("english");

// dohvatanje prevoda na klik

englishLanguage.addEventListener("click", renderEnglishContent);
serbianLanguage.addEventListener("click", renderSerbianContent);

function renderEnglishContent() {
  renderContent("English");
}

function renderSerbianContent() {
  renderContent("Serbian");
}

function renderContent(language) {
  language = fetch(`js/translation/${language}.json`)
    .then((response) => {
      return response.json();
    })
    .then((language) => {
      for (let [key, value] of Object.entries(language)) {
        let objectProperty = document.getElementById(`${key}`);
        objectProperty.textContent = `${value}`;
      }
    });
}

renderSerbianContent();
