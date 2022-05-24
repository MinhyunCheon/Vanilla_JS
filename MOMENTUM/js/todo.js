const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("ul#todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    addTodoList(newTodo);
}

function addTodoList(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = todo;

    todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleTodoSubmit);