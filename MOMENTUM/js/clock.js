const clock = document.querySelector("h2#clock");

clock.innerText = "00:00";

function sayHello() {
    console.log("Hello");
}

// interval, 특정 주기마다 반복되어 발생해야 하는 것
// 새로고침 시, 바로 출력되지 않고 지정된 시간이 지난 후 출력 후 반복
setInterval(sayHello, 5000);