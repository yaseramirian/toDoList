const toDoInput = document.querySelector(".new-input");

const toDoListHolder = document.querySelector(".list-holder");
toDoListHolder.addEventListener("click", checkRemove);

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
