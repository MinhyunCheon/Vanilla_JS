const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const displayName = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";    // 변수로 선언해 사용하면 잘못 입력 시, 자바스크립트에서 오타 피드백 발생

function onLoginSubmit(event) {
    event.preventDefault(); // submit의 기본 이벤트인 새로고침을 방지하기 위해 선언
    const userName = loginInput.value;

    displayUserName(userName);
    localStorage.setItem(USERNAME_KEY, userName);
    console.log(userName);
}

function displayUserName(userName) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    displayName.classList.remove(HIDDEN_CLASSNAME);
    displayName.innerText = `Hello ${userName}`;
}

// 브라우저가 onLoginSubmit를 호출할 때, 페이지의 기본 정보를 함께 넘겨준다.
loginForm.addEventListener("submit", onLoginSubmit);

const localUserName = localStorage.getItem(USERNAME_KEY);
if(localUserName !== null) {
    displayUserName(localUserName);
}