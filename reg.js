let images = [
    "https://source.unsplash.com/1600x900/?handmade,market",
    "https://source.unsplash.com/1600x900/?crafts,market",
    "https://source.unsplash.com/1600x900/?handicraft,store",
    "https://source.unsplash.com/1600x900/?art,handmade"
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero');

function changeBackground() {
    heroSection.style.background = `url(${images[currentIndex]}) no-repeat center center/cover`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
