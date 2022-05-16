const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");   // 예시용으로 하나의 요소만 있어 간략히 선언

function onLoginSubmit(event) {
    event.preventDefault(); // submit의 기본 이벤트인 새로고침을 방지하기 위해 선언
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    alert("clicked!");
}

// 브라우저가 onLoginSubmit를 호출할 때, 페이지의 기본 정보를 함께 넘겨준다.
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);