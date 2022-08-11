const toDoInput = document.querySelector(".new-input");

const toDoListHolder = document.querySelector(".list-holder");
toDoListHolder.addEventListener("click", checkRemove);

const addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", add);

document.addEventListener("DOMContentLoaded", getLocalTodos);

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
  saveLocalTodos(toDoInput.value);
  toDoInput.value = "";
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  const todo = item.parentElement;

  if (classList[0] === "check-btn") {
    todo.classList.toggle("completed");
  } else if (classList[0] === "remove-btn") {
    removeLocalTodos(todo);
    todo.remove();
  }
}

function saveLocalTodos(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function getLocalTodos(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];



  savedTodos.forEach((todo) => {
    const toDoList = document.createElement("div");
    const newToDo = `
      <div class="list">
      <li>${todo}</li>
      <i class="check-btn fa fa-circle-check" aria-hidden="true"></i>
      <i class="remove-btn fa fa-trash" aria-hidden="true"></i>
      </div>
      `;
    toDoList.innerHTML = newToDo;
    toDoListHolder.appendChild(toDoList);
  });
}

function removeLocalTodos(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const filteredTodos = savedTodos.filter(
    (t) => t !== todo.children[0].innerText
  );
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
}
