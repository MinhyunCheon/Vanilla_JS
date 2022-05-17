const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const displayName = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); // submit의 기본 이벤트인 새로고침을 방지하기 위해 선언
    const userName = loginInput.value;
    
    // if(userName.length > 0) {   // HTML에서 이미 확인하기 때문에 불필요
        loginForm.classList.add(HIDDEN_CLASSNAME);
        displayName.classList.remove(HIDDEN_CLASSNAME);
        // displayName.innerText = "Hello " + userName;
        displayName.innerText = `Hello ${userName}`;    // 위 내용 대체
        localStorage.setItem("userName", userName);
    // }
    console.log(userName);
}

// 브라우저가 onLoginSubmit를 호출할 때, 페이지의 기본 정보를 함께 넘겨준다.
loginForm.addEventListener("submit", onLoginSubmit);