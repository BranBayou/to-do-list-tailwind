const body = document.querySelector("body");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn");
const todo = document.querySelector(".todo");

const todos = [];

function addTodo() {
  if(todo.value === "") {
    alert("Empty todo!?");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    list.prepend(li);
    todo.value = "";
  }
}

addBtn.addEventListener("click", addTodo); 
