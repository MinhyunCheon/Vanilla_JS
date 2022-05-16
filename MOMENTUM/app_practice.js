// const - 상수, let - 변수
// 기본적으로 const를 사용하고, 변수의 업데이트가 필요한 경우 let 사용
// 자바스크립트는 기존 웹 사이트의 보존을 지향하기 때문에 개선 전 기능을 유지하고, 새 기능을 추가
// ex) var -> const, let
// 3가지 모두 사용 가능하지만, 개선된 const, let 권장
const a = 5;
const b = 2;
// 자바스크립트는 camelCase를 권장
const veryLongVariableName = 0;

console.log(a + b);
console.log(a * b);
console.log(a / b);

// boolean
// 컴퓨터는 0 - off, 1 - on로 구분

// null(비어있음), undefined(메모리에 존재하지만 값이 들어있지 않은 상태)
// null - 값이 비어있다고 명시적으로 선언
const nullVal = null;   // null
let undefinedVal;       // undefined

// array
// []에 콤마(,)를 통해 구분하며, 하나의 배열에 여러 데이터를 저장할 수 있다.
const arrTest = ["a", 1, true, null, undefined];
// index.html을 크롬에서 최초 실행하고 개발자 도구를 활성화하면 두 로그 모두 6개의 인자를 가진다.
// 새로고침을 하는 경우 5개, 6개 정상적으로 구분된다.
console.log(arrTest);
arrTest.push("add item");
console.log(arrTest);

// object
const player = {
    name : "test"
    , points : 10
};
console.log(player);
console.log(player.name);
console.log(player["name"]);    // 위와 동일한 결과 출력
player.name = "test name";      // 업데이트
console.log(player.name);       // object가 const로 선언되어 있지만, 내부 값을 변경하는 것은 가능
// player = true;               // 타입 변경 등 변수 전체에 대한 변화는 불가
player.lastName = "1";          // 값 추가
console.log(player);

// function
function testFunc(nameOfPerson) {
    console.log("hello " + nameOfPerson);
}
testFunc("testUser");

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
plus(); // NaN(Not a Number) 출력
plus(1, 2);
// console.log(firstNumber);   // 함수 내부 선언 변수 참조 불가(Uncaught ReferenceError: firstNumber is not defined)
function divide(a, b) {
    console.log(a / b);
}
divide(4, 2);

const playerFunc = {
    name : "Test playerFunc"
    , sayHello : function(name) {
        console.log("hello " + name + " nice to meet you!");
    }
}
playerFunc.sayHello("TestFunc");

// Recap
// const를 기본으로 하되, 필요에 따라 let을 사용
// var는 절대 사용금지
// null = 빈 값을 명시, undefined = 정의되지 않은 값

// Recap 2
// 자바스크립트는 위에서 아래로 실행
// function은 특정 코드를 캡슐화해서 반복사용이 가능하도록 만든 것
// function 데이터 전달 시, 파라미터의 순서가 중요
// 요구 파라미터의 갯수를 초과하더라도 에러가 발생하지 않음
function minusFive(num) {
    console.log(num - 5);   // 첫번째 값인 5와 5의 차인 0 출력
}
minusFive(5, 4, 3, 2, 1);
// minusFive(num)의 num은 해당 function 안에서만 유효
// 최종 과제 - calculator 객체 안에 사칙연산 구현
const calculator = {
    add : (a, b) => {
        console.log(a + b);
    }
    , minus : (a, b) => {
        console.log(a - b);
    }
    , multiply : (a, b) => {
        console.log(a * b);
    }
    , divide : (a, b) => {
        console.log(a / b);
    }
}
calculator.add(1, 2);
calculator.minus(2, 1);
calculator.multiply(1, 2);
calculator.divide(4, 2);

// Returns
const age = 96;
function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const krAge = calculatorKrAge(age);
console.log(krAge);

// Conditionals
// 입력창이 출력되고, 페이지는 대기 상태
// 위의 이유와 커스텀이 불가능한 점 때문에 prompt를 사용하지 않는 추세
const ageOfPrompt = parseInt(prompt("How old are you?"));
console.log(typeof ageOfPrompt);    // typeof(ageOfPrompt)도 사용 가능하나 보편적으로 띄어쓰기를 사용
console.log(parseInt(ageOfPrompt)); // 문자를 입력한 경우 NaN 출력
console.log(typeof NaN);            // typeof에서는 NaN도 number로 인식

// Conditionals part Two
console.log(isNaN(ageOfPrompt));    // NaN 여부 반환(return boolean)
if(isNaN(ageOfPrompt)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age");
}

// Conditionals part Three
if(isNaN(ageOfPrompt) || ageOfPrompt < 0) {
    console.log("Please write a real positive number 2");
} else if(ageOfPrompt < 18) {
    console.log("You are too young");
} else if(ageOfPrompt >= 18 && ageOfPrompt <= 50) {
    console.log("You can drink");
} else if(ageOfPrompt > 50 && ageOfPrompt <= 80) {
    console.log("You should exercise");
} else if(ageOfPrompt > 80) {
    console.log("You can do whatever you want");
}

// Recap
// =(값 할당), ===(값 확인, age === 100)
// if((a && b) || (c && d)) 다중 조건 가능

// The Document Object
// console에 document를 통해 작성한 페이지의 구성 확인 가능
console.dir(document);  // 객체 상세내용 출력
document.title = "Hi";  // 페이지 타이틀 변경

// HTML in Javascript
const title = document.getElementById("title");
console.log(title);
title.innerText = "Got you!";

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
function handleTitleMouseEnter() {
    console.log("mouse is here!");
}
qTitle.addEventListener("click", handleTitleClick);
qTitle.addEventListener("mouseenter", handleTitleMouseEnter);