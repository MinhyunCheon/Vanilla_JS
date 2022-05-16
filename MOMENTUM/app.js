// CSS in Javascript
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
    // ==는 값만 비교하기 때문에 "0" == 0의 경우 true를 반환
    // ===는 형태까지 비교하기 때문에 false
    const currentColor = h1.style.color;
    let newColor;
    
    if(currentColor === "blue") newColor = "tomato";
    else newColor = "blue";
    
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);