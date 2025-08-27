import {
  addTask,
  deleteTask,
  editTask,
  toggleDoneTask,
  emptyInput,
} from "./updateArray.js";
import { createError } from "./errors.js";
import { createDOMTask, deleteDOMTask, updateDone } from "./elements.js";

export function addElement(event, todoList) {
  const addBtn = event.target.closest("form button");
  if (addBtn) {
    event.preventDefault();
    const form = event.target.closest("form");
    const input = form.querySelector("input");
    const inputText = input.value.trim();

    let error;
    if (emptyInput(inputText)) {
      error = createError("Vous ne pouvez pas ajouter une tâche vide");
      if (!form.parentElement.querySelector(".error")) {
        form.after(error);
      }
    } else {
      const id = addTask(inputText, todoList);
      const task = todoList.find((el) => el.id === id);
      const newTask = createDOMTask(task);
      const ul = document.querySelector("ul");
      ul.prepend(newTask);
      deleteGeneralError();
    }

    if (inputText) {
    } else {
    }
    input.value = "";
    input.focus();
  }
}

export function deleteElement(event, todoList) {
  const delBtn = event.target.closest(".delete");
  if (delBtn) {
    const target = event.target.closest("li");
    todoList = deleteTask(todoList, target.dataset.id);
    deleteDOMTask(target.dataset.id);
  }
  return todoList;
}

export function editElement(event, todoList) {
  const target = event.target.closest("li");
  const editBtn = event.target.closest(".edit");
  if (editBtn) {
    changeMode(todoList, target);
  }
  const validateBtn = event.target.closest(".validate");
  if (validateBtn || event.key === "Enter") {
    applyEdit(todoList, target);
    deleteGeneralError();
  }

  const cancelBtn = event.target.closest(".cancel");
  if (cancelBtn || event.key === "Escape") {
    cancelEdit(todoList, target);
  }
}
export function toggleDoneElement(event, todoList) {
  const doneBtn = event.target.closest("span");
  const li = event.target.closest("li");
  if (doneBtn && li.dataset.mode === "view") {
    const target = event.target.closest("li");
    todoList = toggleDoneTask(todoList, target.dataset.id);
    updateDone(
      target,
      todoList.find((element) => element.id === Number(target.dataset.id))
    );
  }

  return todoList;
}

function changeMode(todoList, target) {
  const task = todoList.find((element) => {
    if (element.id === Number(target.dataset.id)) {
      return element;
    }
  });
  if (task) {
    task.mode = "edit";
  }
  const newLi = createDOMTask(task);
  const newInput = newLi.querySelector("input");
  target.replaceWith(newLi);
  newInput.focus();
  newInput.select();
}

function applyEdit(todoList, target) {
  const task = editTask(todoList, target);
  if (task.error) {
    const error = createError(task.error);
    if (!target.parentElement.querySelector(".error")) {
      target.after(error);
    }
  }
  if (task) {
    const newLi = createDOMTask(task);
    target.replaceWith(newLi);
  }
}

function cancelEdit(todoList, target) {
  const task = todoList.find(
    (element) => element.id === Number(target.dataset.id)
  );
  task.text = target.dataset.oldText;
  task.mode = "view";
  const newLi = createDOMTask(task);
  target.replaceWith(newLi);
}

export function deleteError(event) {
  const error = event.target.parentElement.querySelector(".error");
  if (error) {
    error.remove();
  }
}

function deleteGeneralError() {
  const error = document.querySelector(".error");
  if (error) {
    error.remove();
  }
}
