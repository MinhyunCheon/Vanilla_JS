const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "todos";

const localTodos = localStorage.getItem(TODOS_KEY);
const todos = localTodos ? JSON.parse(localTodos) : [];

todos.forEach(element => {
    addTodoList(element);
});

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    addTodoList(newTodo);
    setLocalStorageTodos();
}

function addTodoList(todo) {
    const span = document.createElement("span");
    span.innerText = todo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
    
    const li = document.createElement("li");
    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function setLocalStorageTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

todoForm.addEventListener("submit", handleTodoSubmit);