export function addTask(string, todoList) {
  let maxId = 0;
  if (todoList.length !== 0) {
    maxId = todoList[todoList.length - 1].id + 1;
  } else {
    maxId = 0;
  }
  const newString = string[0].toUpperCase() + string.slice(1);
  todoList.push({ id: maxId, text: newString, done: false, mode: "view" });
  return maxId;
}

export function editTask(todoList, target) {
  const task = todoList.find(
    (element) => element.id === Number(target.dataset.id)
  );
  if (task) {
    const inputText = target.querySelector("input").value.trim();
    if (emptyInput(inputText)) {
      task.text = target.dataset.oldText;
      task.error = "Vous ne pouvez pas modifier la tâche pour être vide";
    } else {
      const newString = inputText[0].toUpperCase() + inputText.slice(1);
      task.text = newString;
      delete task.oldText;
      delete task.error;
    }
    task.mode = "view";
  }
  return task;
}

export function toggleDoneTask(todoList, id) {
  const updateList = todoList.map((el) => {
    if (el.id === Number(id)) {
      return { ...el, done: !el.done };
    }
    return el;
  });
  return updateList;
}

export function deleteTask(todoList, id) {
  todoList = todoList.filter((el) => el.id !== Number(id));
  return todoList;
}

export function emptyInput(inputString) {
  if (inputString.trim() === "") {
    return true;
  }
  return false;
}
