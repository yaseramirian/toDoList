const toDoInput = document.querySelector(".new-input");
const toDoListHolder = document.querySelector(".list-holder");

const addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", add);

const list = document.querySelector(".list-holder");
list.addEventListener("click", checkRemove);

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

function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  const todo = item.parentElement;
  
  if (classList[0] === "check-btn") {
    todo.classList.toggle("completed");
  } else if (classList[0] === "remove-btn") {
    todo.remove();
  }
}

