import "./style.css";
import { addElement, toggleDone, deleteElement } from "./events.js";
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  toggleDone(event);
  deleteElement(event);
  addElement(event);
});
