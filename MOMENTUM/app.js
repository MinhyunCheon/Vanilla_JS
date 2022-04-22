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