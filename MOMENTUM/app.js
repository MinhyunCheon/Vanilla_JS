// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function clickLoginButton() {
    // HTML에서 form으로 처리 가능하므로 굳이 JS에서 처리하는 것은 지양
    const userName = loginInput.value;
    if(userName === "") {
        alert("Please write your name.");
    } else if(userName.length > 15) {
        alert("Your name is too long.")
    }
}

loginButton.addEventListener("click", clickLoginButton)