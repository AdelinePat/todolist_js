import {
  backToOriginalTemplate,
  createElementTemplate,
  editElementTemplate,
} from "./taskTemplate.js";
import { createError } from "./errors.js";

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
      if (!document.querySelector(".error")) {
        const error = createError("Vous ne pouvez pas ajouter une tâche vide");
        form.after(error);
      }
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
    const li = event.target.closest("li");
    const paragraph = li.querySelector("p");
    console.log(event.target);
    paragraph.classList.toggle("crossed");
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

export function deleteError(event) {
  const err = event.target.closest(".error");
  if (err) {
    err.remove();
  }
}

export function editElement(event) {
  const editBtn = event.target.closest(".edit");
  if (editBtn) {
    editElementTemplate(event.target.closest("li"));
    console.log("edit!!!");
  }
  const validateBtn = event.target.closest(".validate");
  if (validateBtn || event.key === "Enter") {
    backToOriginalTemplate(event.target.closest("li"), true);
  }
  const cancelBtn = event.target.closest(".cancel");
  if (cancelBtn || event.key === "Escape") {
    backToOriginalTemplate(event.target.closest("li"), false);
  }
}
