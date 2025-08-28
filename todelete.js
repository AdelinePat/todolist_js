const todos = [
  {
    text: "something",
    done: false,
  },
  {
    text: "some other thing",
    done: false,
  },
];
const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span
    <p>${todo.text}</p>
    <button>Supprimer</button`;
  return li;
};
