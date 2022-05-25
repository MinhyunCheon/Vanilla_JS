navigator.geolocation.getCurrentPosition(p => {
    const lat = p.coords.latitude;
    const lng = p.coords.longitude;

    console.log("You live in", lat, lng);
}, () => alert("Can't find you. No weather for you."));