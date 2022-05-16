const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); // submit의 기본 이벤트인 새로고침을 방지하기 위해 선언
    console.log(event);
}
// 브라우저가 onLoginSubmit를 호출할 때, 페이지의 기본 정보를 함께 넘겨준다.
loginForm.addEventListener("submit", onLoginSubmit);