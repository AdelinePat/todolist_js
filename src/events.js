import { createElementTemplate } from "./taskTemplate.js";

export function addElement(event) {
  const addBtn = event.target.closest("form button");
  if (addBtn) {
    event.preventDefault();
    const form = event.target.closest("form");
    const input = form.querySelector("input");
    const inputText = input.value.trim();
    if (inputText) {
      createElementTemplate(inputText);
    } else {
      console.log("oups le champ est vide!");
    }
    input.value = "";
    input.focus();
  }
}

export function toggleDone(event) {
  const doneBtn = event.target.closest(".todo");
  if (doneBtn) {
    console.log(event.target);
    event.target.classList.toggle("done");
  }
  //   if (event.target.classList.contains("todo")) {
  //     console.log(event.target);
  //     const todo = event.target;
  //     todo.classList.toggle("done");
  //   }
}

export function deleteElement(event) {
  const deleteBtn = event.target.closest(".delete");
  if (deleteBtn) {
    const element = event.target.closest("li");
    console.log(element);
    element.remove();
  }
  //   if (event.target.classList.contains("delete")) {
  //     const element = event.target.closest("li");
  //     console.log(element);
  //     element.remove();
  //   }
}
