const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "todos";

const localTodos = localStorage.getItem(TODOS_KEY);
const todos = localTodos ? JSON.parse(localTodos) : [];

todos.forEach(addTodoList);

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {text: todoInput.value, id: Date.now()};
    todoInput.value = "";
    todos.push(newTodoObj);
    addTodoList(newTodoObj);
    setLocalStorageTodos();
}

function addTodoList(todo) {
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
    
    const li = document.createElement("li");
    li.id = todo.id;
    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function setLocalStorageTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

todoForm.addEventListener("submit", handleTodoSubmit);