import "./style.css";
import {
  addElement,
  deleteElement,
  toggleDoneElement,
  editElement,
  deleteError,
} from "./events.js";
import { createDOMTask } from "./elements.js";

let todoList = [
  {
    id: 1,
    text: "Finir les exercices de la certification Javascript",
    done: false,
    mode: "view",
  },
  { id: 2, text: "S'entraîner à utiliser docker", done: false, mode: "view" },
  { id: 3, text: "Finir de rédiger le README.md", done: true, mode: "view" },
  { id: 4, text: "Refactoriser le code", done: true, mode: "view" },
];

const container = document.querySelector(".container");
renderList();

container.addEventListener("click", (event) => {
  addElement(event, todoList);
  todoList = deleteElement(event, todoList);
  todoList = toggleDoneElement(event, todoList);
  editElement(event, todoList);
  deleteError(event);
});

container.addEventListener("keydown", (event) => {
  const target = event.target.closest("li");
  if (!target) return;
  
  const mode = target.dataset?.mode;
  if (mode === "edit" && (event.key === "Escape" || event.key === "Enter")) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    editElement(event, todoList);
  }
});

function renderList() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  todoList.forEach((element) => {
    const li = createDOMTask(element);
    ul.prepend(li);
  });

  console.log(todoList);
}
