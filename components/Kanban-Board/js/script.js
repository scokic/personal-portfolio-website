"use strict";

/* ---------------------------- CREATE NEW CARD ON BOARD ---------------------------- */

let newCardButtons = document.querySelectorAll(".add-new-card");
let kanbanStage = document.querySelector(".kanban-card-container");
let kanbanCard = document.querySelector(".kanban-card");

newCardButtons.forEach((button) => {
  button.addEventListener("click", createNewCard);
});

function createNewCard() {
  //create card with header and text

  let newCard = document.createElement("div");

  newCard.classList.add("kanban-card");
  let newCardSubject = document.createElement("h4");
  newCardSubject.textContent = "Hello";
  let newCardText = document.createElement("p");
  newCardText.textContent = "Hello";
  newCard.appendChild(newCardSubject);
  newCard.appendChild(newCardText);

  let stageContainer = this.parentElement.parentElement;
  let cardContainer = stageContainer.querySelector(".kanban-card-container");
  cardContainer.appendChild(newCard);

  //scroll to bottom
  cardContainer.scrollTo(10000, kanbanStage.scrollHeight);
}

/* ---------------------------- CREATE NEW STAGE ON BOARD ---------------------------- */

let newStageButton = document.querySelector(".new-stage-button");

newStageButton.addEventListener("click", createNewStage);

function createNewStage() {
  let newStage = document.createElement("div");
  newStage.classList.add("kanban-stage");

  let kanbanStageTitle = document.createElement("div");
  kanbanStageTitle.classList.add("kanban-stage-title");
  newStage.appendChild(kanbanStageTitle);

  let newStageName = document.createElement("h3");
  newStageName.textContent = "New board";
  newStageName.classList.add("kanban-stage-title");
  kanbanStageTitle.appendChild(newStageName);

  let newCardContainer = document.createElement("div");
  newCardContainer.classList.add("kanban-card-container");
  newStage.appendChild(newCardContainer);

  let newCardButtonContainer = document.createElement("div");
  newCardButtonContainer.classList.add("new-card-container");
  newStage.appendChild(newCardButtonContainer);

  let newCardButton = document.createElement("p");
  newCardButton.classList.add("button");
  newCardButton.classList.add("add-new-card");
  newCardButton.innerText = "+ Add new card";
  newCardButtonContainer.appendChild(newCardButton);
  newCardButton.addEventListener("click", createNewCard);

  let kanbanContainer = this.parentElement.parentElement.parentElement;
  kanbanContainer.appendChild(newStage);

  //scroll to bottom
  kanbanContainer.scrollTo(100000, newStage.scrollWidth);
}
