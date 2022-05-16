// CSS in Javascript part Two
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    // 자바스크립트에서 클래스명을 변경하는 것은 지양
    // CSS에 선언된 기존 클래스명을 보장할 수 없음
    if(h1.className === "active") h1.className = "";
    else h1.className = "active";
}
h1.addEventListener("click", handleTitleClick);