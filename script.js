// JavaScript for swipe navigation between videos
const videoContainer = document.getElementById('video-container');
const slides = document.querySelectorAll('.video-slide');
let currentIndex = 0;

// Initialize the first video in view
function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.transform = `translateY(${(idx - index) * 100}%)`;
    });
}

// Listen for swipe events to navigate
let startY = 0;
let endY = 0;

videoContainer.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
});

videoContainer.addEventListener('touchend', (event) => {
    endY = event.changedTouches[0].clientY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance

    if (startY - endY > swipeThreshold) {
        // Swipe up
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (endY - startY > swipeThreshold) {
        // Swipe down
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }

    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);
