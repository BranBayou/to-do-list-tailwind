const body = document.querySelector("body");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn");
const todo = document.querySelector(".todo");

const todos = [];

function addTodo() {
  if(todo.value === "") {
    alert("Empty todo!?");
  } else {
    let radio = document.createElement("radio");
    let li = document.createElement("li");
    li.classList.add("flex", "justify-between", "my-3", "bg-fuchsia-300", "p-2", "rounded-xl", "text-violet-700");
    li.innerHTML = `<div class="left"><input class="radio" type="radio" id="checked" name="fav_language" value="">
    ${todo.value}
    </div>
    <p class="deleteBtn">X</p>`;
    list.prepend(li);
    todo.value = "";
  }
}

addBtn.addEventListener("click", addTodo); 
