const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("Hello");
}

function getTime() {
    const date = new Date();
    const hours = getTwoDigitsDate(date.getHours());
    const minutes = getTwoDigitsDate(date.getMinutes());
    const seconds = getTwoDigitsDate(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}

function getTwoDigitsDate(date) {
    const convertDate = date.toString();

    return convertDate.length < 2 ? "0" + convertDate : convertDate;
}

function setClock() {
    clock.innerText = getTime();
}

setClock();
// Interval과 다르게 지정된 시간 후 1회 실행
// setTimeout(sayHello, 5000);
setInterval(setClock, 1000);

