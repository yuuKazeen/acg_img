// script.js
let currentIndex = 0;
const images = [
    "20250819090545.jpg"
];

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = "image/" + images[currentIndex];
}

setInterval(showNextImage, 3000); 
