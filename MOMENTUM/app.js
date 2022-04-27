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