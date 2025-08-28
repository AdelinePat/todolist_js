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
    text: "empêcher l'ajout de todo vide",
    done: true,
    mode: "view",
  },
  {
    id: 2,
    text: "mettre une majuscule à la première lettre du texte de la todo",
    done: true,
    mode: "view",
  },
  {
    id: 3,
    text: "barrer le texte de la todo lorsqu'elle est terminée",
    done: true,
    mode: "view",
  },
  {
    id: 4,
    text: "Ajouter un curseur pointer sur les todos",
    done: false,
    mode: "view",
  },
  {
    id: 5,
    text: "Ajouter un effet hover sur les todos pour mieux voir celle sur laquelle l'utilisateur va cliquer",
    done: true,
    mode: "view",
  },
  {
    id: 6,
    text: "Créer des classes pour colorer les boutons",
    done: true,
    mode: "view",
  },
  {
    id: 7,
    text: "Lors de l'édition, ajoutez un écouteur pour sauvegarder avec la touche entrée si le champ est focus ou annuler avec la touche escape",
    done: true,
    mode: "view",
  },
  {
    id: 8,
    text: "Rendre l'édition possible sur un double clic",
    done: false,
    mode: "view",
  },
  {
    id: 9,
    text: "[ Avancé ] : empêcher le double clic de changer le statut deux fois de suite de la todo",
    done: false,
    mode: "view",
  },
  {
    id: 10,
    text: "[ Avancé ] : focus l'input après l'édition",
    done: true,
    mode: "view",
  },
  //   {
  //     id: 1,
  //     text: "finir les exercices de la certification Javascript",
  //     done: false,
  //     mode: "view",
  //   },
  //   { id: 2, text: "S'entraîner à utiliser docker", done: false, mode: "view" },
  //   { id: 3, text: "Finir de rédiger le README.md", done: true, mode: "view" },
  //   { id: 4, text: "Refactoriser le code", done: true, mode: "view" },
];
const title = document.querySelector("h1");
const titleSpan = document.createElement("span");
title.prepend(titleSpan);
titleSpan.textContent = `${todoList.length} ${
  todoList.lenght > 1 ? "chose" : "choses"
} `;

const container = document.querySelector(".container");
renderList();

container.addEventListener("click", (event) => {
  addElement(event, todoList);
  todoList = deleteElement(event, todoList);
  todoList = toggleDoneElement(event, todoList);
  editElement(event, todoList, event.target.closest(".edit"));
  deleteError(event);
  titleSpan.textContent = `${todoList.length} ${
    todoList.lenght > 1 ? "chose" : "choses"
  } `;
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

container.addEventListener("dblclick", (event) => {
  const li = event.target.closest("li");
  const span = li.querySelector("span");
  if (!span.classList.contains("done")) {
    console.log(li, span);
    editElement(event, todoList, event.target.closest("p"));
  }
});

function renderList() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  todoList.forEach((element) => {
    const newString = element.text[0].toUpperCase() + element.text.slice(1);
    element.text = newString;
    const li = createDOMTask(element);
    ul.prepend(li);
  });
  console.log(todoList.length);
  console.log(todoList);
}
