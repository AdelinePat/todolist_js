
export function createElementTemplate(todoString) {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.setAttribute("class", "todo");

  const text = document.createTextNode(todoString);
  const paragraph = document.createElement("p");

  const editText = document.createTextNode("Editer");
  const editBtn = document.createElement("button");

  const delText = document.createTextNode("Supprimer");
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delete");

  paragraph.append(text);
  editBtn.append(editText);
  delBtn.append(delText);
  li.append(span, paragraph, editBtn, delBtn);
  ul.append(li);
}
