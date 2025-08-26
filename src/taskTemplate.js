import { createError } from "./errors.js";

export function createBtn(type, text) {
  const delText = document.createTextNode(text);
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", type);
  delBtn.append(delText);
  return delBtn;
}

function createSpan() {
  const span = document.createElement("span");
  span.setAttribute("class", "todo");
  return span;
}

function generateEditInput(target) {
  const newInput = document.createElement("input");
  const oldParagraph = target.querySelector("p");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("class", "taskInput");
  newInput.value = oldParagraph.textContent;
  target.dataset.oldText = oldParagraph.textContent;
  oldParagraph.replaceWith(newInput);
  newInput.focus();
  newInput.select();
}

function swapButton(target) {
  const editBtn = target.querySelector(".edit");
  const swapMap = [
    { fromClass: "edit", toClass: "validate", text: "Valider" },
    { fromClass: "delete", toClass: "cancel", text: "Annuler" },
  ];

  swapMap.forEach(({ fromClass, toClass, text }) => {
    if (editBtn) {
      const oldBtn = target.querySelector(`.${fromClass}`);
      const newBtn = createBtn(toClass, text);
      oldBtn.replaceWith(newBtn);
    } else {
      const oldBtn = target.querySelector(`.${toClass}`);
      const newText = fromClass === "edit" ? "Editer" : "Supprimer";
      const newBtn = createBtn(fromClass, newText);
      oldBtn.replaceWith(newBtn);
    }
  });
}

function createParagraph(string) {
  const text = document.createTextNode(string);
  const paragraph = document.createElement("p");
  paragraph.append(text);
  return paragraph;
}

export function createElementTemplate(todoString) {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  const span = createSpan();
  const paragraph = createParagraph(todoString);
  const editBtn = createBtn("edit", "Editer");
  const delBtn = createBtn("delete", "Supprimer");

  li.append(span, paragraph, editBtn, delBtn);
  ul.append(li);
}

export function editElementTemplate(target) {
  console.log(target);
  generateEditInput(target);
  swapButton(target);
}

export function backToOriginalTemplate(target, boolean) {
  const input = target.querySelector("input");
  let paragraph;
  if (boolean) {
    if (input.value.trim() === "") {
      const err = createError("La tâche ne peut pas être vide");
      target.after(err);
      paragraph = createParagraph(target.dataset.oldText);
    } else {
      paragraph = createParagraph(input.value);
    }
  } else {
    paragraph = createParagraph(target.dataset.oldText);
  }
  const span = target.querySelector("span");
  if (span.classList.contains("done")) {
    paragraph.setAttribute("class", "crossed");
  }
  input.replaceWith(paragraph);
  swapButton(target);
  delete target.dataset.oldText;
}
