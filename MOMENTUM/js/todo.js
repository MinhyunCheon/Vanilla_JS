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

todoForm.addEventListener("submit", handleTodoSubmit);