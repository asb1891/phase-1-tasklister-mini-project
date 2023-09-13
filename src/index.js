document.addEventListener("DOMContentLoaded", () => {
  addEventListener("submit", (event) => {
event.preventDefault();
const list = document.querySelector("#tasks");
const item = document.createElement("li");
const input = event.target["new-task-description"].value;
item.textContent = input ;
list.appendChild(item);
  })
});
const deleteButton = createElement('button');
deleteButton.textContent = "X";
newTask.appendChild(deleteButton);
deleteButton.addEventListener("click" , () => {
newTask.remove()
});
item.append(newTask);


