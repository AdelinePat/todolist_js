export function createBtn(type, text) {
  const delText = document.createTextNode(text);
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", type);
  delBtn.append(delText);
  return delBtn;
}

function createParagraph(string) {
  const text = document.createTextNode(string);
  const paragraph = document.createElement("p");
  paragraph.append(text);
  return paragraph;
}

function createSpan() {
  const span = document.createElement("span");
  span.setAttribute("class", "todo");
  return span;
}

export function deleteDOMTask(id) {
  const li = document.querySelector(`li[data-id='${id}']`);
  if (li) {
    li.remove();
  }
}

function generateEditInput(target, task) {
  target.dataset.oldText = task.text;

  const newInput = document.createElement("input");

  newInput.setAttribute("type", "text");
  newInput.setAttribute("class", "taskInput");
  newInput.value = task.text;

  return newInput;
}

export function createDOMTask(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;
  li.dataset.mode = task.mode;
  const span = createSpan();
  let paragraph;
  let firstBtn = createBtn("edit", "Editer");
  let secondBtn = createBtn("delete", "Supprimer");

  if (task.mode === "view") {
    paragraph = createParagraph(task.text);
  } else {
    firstBtn.classList.add("validate");
    firstBtn.classList.remove("edit");
    firstBtn.textContent = "Valider";

    secondBtn.classList.add("cancel");
    secondBtn.classList.remove("delete");
    secondBtn.textContent = "Annuler";

    paragraph = generateEditInput(li, task);
  }
  li.append(span, paragraph, firstBtn, secondBtn);
  if (task.done) {
    updateDone(li, task);
  }

  return li;
}

export function updateDone(target, task) {
  const span = target.querySelector("span");
  const paragraph = target.querySelector("p");
  const editBtn = target.querySelector(".edit");
  setClassState(span, "done", task.done);
  setClassState(paragraph, "crossed", task.done);
  setClassState(editBtn, "hide", task.done);
}

export function showError(target) {
  let error = target.nextElementSibling;

  if (!error || !error.classList.contains("error")) {
    return true;
  }
}

function setClassState(el, className, condition) {
  if (condition) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
  }
}
