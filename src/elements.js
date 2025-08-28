export function createBtn(type, text) {
  const delText = document.createTextNode(text);
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", type);
  delBtn.append(delText);
  addIcon(delBtn);
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
  const values = [
    {
      fromClass: "edit",
      toClass: "validate",
      fromText: "Editer",
      toText: "Valider",
    },
    {
      fromClass: "delete",
      toClass: "cancel",
      fromText: "Supprimer",
      toText: "Annuler",
    },
  ];
  const li = document.createElement("li");
  li.dataset.id = task.id;
  li.dataset.mode = task.mode;
  const span = createSpan();
  const firstBtn = createBtn("edit", "Editer");
  const secondBtn = createBtn("delete", "Supprimer");

  const paragraph =
    task.mode === "view"
      ? createParagraph(task.text)
      : generateEditInput(li, task);
  setClassState(span, "unavailable", task.mode === "edit");

  li.append(span, paragraph, firstBtn, secondBtn);
  if (task.done) {
    updateDone(li, task);
  }
  toggleBtnEdits(task, firstBtn, values[0]);
  toggleBtnEdits(task, secondBtn, values[1]);
  setClassState(li, "edit-mode", task.mode === "edit");

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

function toggleBtnEdits(task, btn, values) {
  btn.classList.add(task.mode === "view" ? values.fromClass : values.toClass);
  btn.classList.remove(
    task.mode === "view" ? values.toClass : values.fromClass
  );
  btn.textContent = task.mode === "view" ? values.fromText : values.toText;
  addIcon(btn);
}

function addIcon(btn) {
  const icon = document.createElement("i");
  switch (btn.textContent) {
    case "Editer":
      btn.classList.add("ternary-color");
      btn.classList.remove("main-color");
      icon.className = "fa-solid fa-pen";
      break;
    case "Supprimer":
    case "Annuler":
      icon.className = "fa-regular fa-circle-xmark";
      btn.classList.add("secondary-color");
      break;
    case "Valider":
      btn.classList.remove("ternary-color");
      btn.classList.add("main-color");
      // <i class="fa-regular fa-circle-check"></i>
      icon.className = "fa-regular fa-circle-check";
      break;
  }
  btn.prepend(icon);
}
