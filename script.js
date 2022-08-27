// selectors
const toDoInput = document.querySelector(".new-input");
const addButton = document.querySelector(".add-btn");
const toDosList = document.querySelector(".list-holder");
const filterOption = document.querySelector(".filter-todos");
const clearButton = document.querySelector(".clear-btn");

// event listeners
addButton.addEventListener("click", add);
toDosList.addEventListener("click", checkOrRemove);
filterOption.addEventListener("change", filter);
clearButton.addEventListener("click", clear);
document.addEventListener("DOMContentLoaded", getLocalToDos);

// functions
function add() {
  // get input value & create new to do & add to DOM
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("list");

  const newTodo = `
  <li>${toDoInput.value}</li>
  <i class="check-btn fa fa-circle-check" aria-hidden="true"></i>
  <i class="remove-btn fa fa-trash" aria-hidden="true"></i>
  `;
  toDoDiv.innerHTML = newTodo;

  // append to list
  toDosList.appendChild(toDoDiv);

  // save on local storage
  saveLocalToDos(toDoInput.value);

  // reset input for new value
  toDoInput.value = "";
}

function checkOrRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  const toDo = item.parentElement;

  if (classList[0] === "check-btn") {
    toDo.classList.toggle("done");
  } else if (classList[0] === "remove-btn") {
    removeLocalToDos(toDo);
    toDo.remove();
  }
}

function filter(e) {
  toDos = [...toDosList.childNodes];
  toDos.forEach((toDo) => {
    switch (e.target.value) {
      case "all":
        toDo.style.display = "flex";
        break;
      case "done":
        if (toDo.classList.contains("done")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
      case "undone":
        if (!toDo.classList.contains("done")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalToDos(toDo) {
  // save on local storage
  let savedToDos = localStorage.getItem("toDos")
    ? JSON.parse(localStorage.getItem("toDos"))
    : [];

  savedToDos.push(toDo);
  localStorage.setItem("toDos", JSON.stringify(savedToDos));
}

function getLocalToDos() {
  // show items that saved on local storage
  let savedToDos = localStorage.getItem("toDos")
    ? JSON.parse(localStorage.getItem("toDos"))
    : [];

  savedToDos.forEach((toDo) => {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("list");

    const newTodo = `
    <li>${toDo}</li>
    <i class="check-btn fa fa-circle-check" aria-hidden="true"></i>
    <i class="remove-btn fa fa-trash" aria-hidden="true"></i>
    `;
    toDoDiv.innerHTML = newTodo;

    toDosList.appendChild(toDoDiv);
  });
}

function removeLocalToDos(toDo) {
  // remove items from local storage
  let savedToDos = localStorage.getItem("toDos")
    ? JSON.parse(localStorage.getItem("toDos"))
    : [];

  const removedToDos = savedToDos.filter(
    (t) => t !== toDo.children[0].innerText
  );
  localStorage.setItem("toDos", JSON.stringify(removedToDos));
}

function clear() {
  // clear items from list & local storage
  toDosList.remove();
  localStorage.clear();
  location.reload(true); // refresh page to be ready for new items
}
