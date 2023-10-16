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
    li.classList.add("flex", "justify-between", "items-center","my-3", "bg-fuchsia-300", "p-2", "rounded-xl", "text-violet-700");
    li.innerHTML = `<div class="left flex items-center gap-2"><span class="material-symbols-outlined">
    radio_button_unchecked
    </span>
    ${todo.value}
    </div>
    <span class="material-symbols-outlined delete-btn">
delete
</span>`;
    list.prepend(li);
    todo.value = "";
  }
}

addBtn.addEventListener("click", addTodo); 



function deleteTodo(e) {
  if(e.target.tagName === "SPAN") {
    e.target.parentNode.remove();
  }
}
list.addEventListener("click", deleteTodo);

