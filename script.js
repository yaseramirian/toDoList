const toDoInput = document.querySelector(".new-input");
const toDoListHolder = document.querySelector(".list-holder");

const addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", add);

function add() {
  const toDoList = document.createElement("div");

  const newToDo = `
  <div class="list">
  <li>${toDoInput.value}</li>
  <i class="check-btn fa fa-circle-check" aria-hidden="true"></i>
  <i class="remove-btn fa fa-trash" aria-hidden="true"></i>
  </div>
  `;
  toDoList.innerHTML = newToDo;
  toDoListHolder.appendChild(toDoList);
  toDoInput.value = "";
}

