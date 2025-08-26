import "./style.css";
import {
  addElement,
  toggleDone,
  deleteElement,
  deleteError,
  editElement,
} from "./events.js";
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  deleteError(event);
  toggleDone(event);
  editElement(event);
  deleteElement(event);
  addElement(event);
});

container.addEventListener("keydown", (event) => {
  if (
    (event.key === "Enter" || event.key === "Escape") &&
    event.target.classList.contains("taskInput")
  ) {
    editElement(event);
  }
});
