const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("ul#todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit);