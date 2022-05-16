// CSS in Javascript part Three
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    // const clickedClass = "active";
    // if(h1.classList.contains(clickedClass)) h1.classList.remove(clickedClass);
    // else h1.classList.add(clickedClass);
    h1.classList.toggle("active");  // 위 내용을 한줄로 처리 가능
}
h1.addEventListener("click", handleTitleClick);