export function createError(errorMsg) {
  const text = document.createTextNode(errorMsg);
  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "error");
  paragraph.append(text);
  return paragraph;
}
