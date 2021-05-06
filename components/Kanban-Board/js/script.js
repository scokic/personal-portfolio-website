"use strict";

/* ---------------------------- CREATE NEW CARD ON BOARD ---------------------------- */

let newCardButtons = document.querySelectorAll(".add-new-card");
let kanbanStage = document.querySelector(".kanban-card-container");
let kanbanCard = document.querySelector(".kanban-card");

function createNewCard(e) {
  const cardContainer = e.parentElement.parentElement.children[1];

  cardContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="kanban-card">
      <p class="task-name">New task</p>
      <div class="checkbox-container">
        <input
          type="checkbox"
          class="done-checkbox"
          onclick="markTaskDone(this)"
        />
      </div>
      <button class="delete-button" onclick="deleteCard(this)">
        x
      </button>
    </div>`
  );

  cardContainer.scrollTo(10000, kanbanStage.scrollHeight);
}

/* ---------------------------- REMOVE CARD ---------------------------- */

function deleteCard(e) {
  e.parentElement.remove();
}

/* ---------------------------- CREATE NEW STAGE ON BOARD ---------------------------- */

let newStageButton = document.querySelector(".new-stage-button");
let kanbanContainer = document.querySelector(".kanban-container");
let newStageContainer = document.querySelector(".new-stage-container");

newStageButton.addEventListener("click", createNewStage);

function createNewStage() {
  newStageContainer.insertAdjacentHTML(
    "beforeBegin",
    `<div class="kanban-stage">
    <div class="kanban-stage-title">
      <h3>Stage 3</h3>
    </div>

    <div class="kanban-card-container"></div>

    <div class="new-card-container">
      <button onclick="createNewCard(this)" class="button add-new-card">
        + Add new card
      </button>
    </div>
  </div>`
  );

  kanbanContainer.scrollTo(100000, 0);
}

/* ---------------------------- MARK TASK AS DONE ---------------------------- */

function markTaskDone(e) {
  e.parentElement.parentElement.children[0].classList.toggle("task-done");
}
