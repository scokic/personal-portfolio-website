"use strict";

/* ---------------------------- TASKS OBJECT ---------------------------- */

let tasks = [
  {
    stageName: "Backlog",
    stageId: 1,
    taskList: [
      { taskId: "t1", taskName: "Uncompleted task", status: "" },
      { taskId: "t2", taskName: "Completed task", status: "done" },
    ],
  },
  {
    stageName: "Up next",
    stageId: 2,
    taskList: [
      { taskId: "t3", taskName: "name 3", status: "" },
      { taskId: "t4", taskName: "name 4", status: "" },
    ],
  },
];

/* ---------------------------- CREATE NEW CARD ON BOARD ---------------------------- */

let newCardButtons = document.querySelectorAll(".add-new-card");
let kanbanStage = document.querySelector(".kanban-card-container");
let kanbanCard = document.querySelector(".kanban-card");

function createNewCard(e) {
  event.preventDefault();
  const cardContainer = e.parentElement.parentElement.children[1];

  let currentStage = event.target.parentElement.parentElement;
  let currentStageId = currentStage.id;

  let newTaskNameInput = event.target.parentElement.children[0];
  let newTaskName = newTaskNameInput.value;

  if (newTaskName !== "") {
    cardContainer.insertAdjacentHTML(
      "beforeEnd",
      `<div class="kanban-card">
      <p class="task-name">${newTaskName}</p>
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
    newTaskNameInput.value = "";
    cardContainer.scrollTo(0, 10000);
  }
}

/* ---------------------------- REMOVE CARD ---------------------------- */

function deleteCard(e) {
  e.parentElement.remove();
}

/* ---------------------------- CREATE NEW STAGE ON BOARD ---------------------------- */

let newStageButton = document.querySelector(".new-stage-button");
let stageContainer = document.querySelector(".stage-container");
let newStageContainer = document.querySelector(".new-stage-container");

newStageButton.addEventListener("click", createNewStage);

function createNewStage() {
  event.preventDefault();
  let newStageName = document.querySelector(".new-stage-name");
  let newStageNameValue = newStageName.value;

  if (!newStageNameValue) {
    return;
  }

  let stageMaxId = 0;
  (function maxId() {
    tasks.forEach((task) => {
      if (task.stageId > stageMaxId) {
        stageMaxId = task.stageId;
      }
    });
  })();

  let newStageId = stageMaxId + 1;

  tasks.push({
    stageName: `${newStageNameValue}`,
    stageId: newStageId,
    taskList: [],
  });

  stageContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="kanban-stage">
    <div class="kanban-stage-title">
      <h3>${newStageNameValue}</h3>
    </div>

    <div class="kanban-card-container"></div>

    <form class="new-card-container">
      <input type="text" class="new-task-name form-input" placeholder="+ Add new task"/>
      <button onclick="createNewCard(this)" class="button add-new-card">
        + Add new card
      </button>
    </form>
    
  </div>`
  );
  newStageName.value = "";

  stageContainer.scrollTo(10000, 0);
}

/* ---------------------------- MARK TASK AS DONE ---------------------------- */

function markTaskDone(e) {
  e.parentElement.parentElement.children[0].classList.toggle("task-done");
}

/* ---------------------------- TASK & STAGE READING ---------------------------- */

function readStages() {
  tasks.map((stage) => {
    stageContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="kanban-stage" id="${stage.stageId}">    
        <div class="kanban-stage-title">
            <h3>${stage.stageName}</h3>
          </div>
          
          <div class="kanban-card-container">
          </div>

          <form class="new-card-container">
            <input type="text" class="new-task-name form-input" placeholder="+ Add new task"/>
            <button onclick="createNewCard(this)" class="button add-new-card
            ">
              + Add new card
            </button>
          </form>
          
      </div>
    `
    );
  });
}
readStages();

function readTasks() {
  let StageDOM = document.querySelectorAll(".kanban-stage");

  StageDOM.forEach((stage) => {
    if (stage.id !== "") {
      let stageId = stage.id;
      let tasksContainer = stage.children[1];

      let stageObj = tasks.find((stage) => stage.stageId == stageId);
      let stageTasks = stageObj.taskList;

      // show tasks on frontend

      stageTasks.map((task) => {
        tasksContainer.insertAdjacentHTML(
          "beforeend",

          `
      
            <div class="kanban-card">
              <p class="task-name ${
                task.status == "done" ? "task-done" : ""
              } ">${task.taskName}</p>

              <div class="checkbox-container">
                <input
                  type="checkbox"
                  class="done-checkbox"
                  onclick="markTaskDone(this)"
                  ${task.status == "done" ? "checked" : ""}
                />
              </div>

              <button class="delete-button" onclick="deleteCard(this)">
                x
              </button>
            </div>

      `
        );
      });
    } else {
      return;
    }
  });
}

readTasks();
