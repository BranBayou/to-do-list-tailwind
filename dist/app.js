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
    li.classList.add("new-li", "flex", "justify-between", "items-center","my-3", "bg-fuchsia-300", "p-2", "rounded-xl", "text-violet-700");
    li.innerHTML = `<div class="left flex items-center gap-2"><span class="unchecked material-symbols-outlined">
    radio_button_unchecked
    </span>
    <span class="checked material-symbols-outlined hidden">
radio_button_checked
</span>
    </div>
    <div>
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
  const newLi = document.querySelector('.new-li');
  const checked = document.querySelector('.checked');
  const unchecked = document.querySelector('.unchecked');
  if(e.target.classList.contains('delete-btn')) {
    e.target.parentNode.remove();
  } else if(e.target.classList.contains('unchecked')) {
    e.target.classList.toggle('hidden');
    checked.classList.toggle('hidden');
    newLi.children[1].classList.toggle('done');
  } else {
      e.target.classList.toggle('hidden');
      unchecked.classList.toggle('hidden');
      newLi.children[1].classList.toggle('done');
  }
}
list.addEventListener("click", deleteTodo);

