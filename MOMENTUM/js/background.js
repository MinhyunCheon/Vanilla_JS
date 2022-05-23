const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

// prepend 가장 위, append 가장 뒤
document.body.appendChild(bgImage);