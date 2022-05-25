const API_KEY = "e5cb480da08352301c7820e4736de48f";

navigator.geolocation.getCurrentPosition(p => {
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()
        .then(data => {
            const weather = document.querySelector("div#weather span:first-child");
            const city = document.querySelector("div#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        }));
}, () => alert("Can't find you. No weather for you."));