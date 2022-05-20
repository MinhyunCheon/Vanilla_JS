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
    return date.toString().padStart(2, "0");
}

function setClock() {
    clock.innerText = getTime();
}

setClock();
setInterval(setClock, 1000);

