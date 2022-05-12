// Searching For Elements
const hellos = document.getElementsByClassName("hello");
console.log(hellos);
const title = document.getElementsByTagName("h1");
// querySelector 권장, 다수의 태그가 있는 경우 첫번째 요소 반환(모두 선택의 경우 querySelectorAll 사용)
// css 형식의 검색 가능
const qTitle = document.querySelector(".hello h1");
console.log(qTitle);

// Events
qTitle.style.color = "blue";
function handleTitleClick() {
    console.log("clicked!");
}
qTitle.addEventListener("click", handleTitleClick);