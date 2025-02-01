let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

let search = document.getElementById("search-go");



function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    }
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    console.log('clicked');
    showSlide(currentIndex + 1);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
    }
});

showSlide(currentIndex);











































// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;
// const prevButton = document.querySelector('.prevButton');
// const nextButton = document.querySelector('.nextButton');

// let search = document.getElementById("search-go");



// function showSlide(index) {
//     currentIndex = (index + totalSlides) % totalSlides;
//     for (let i = 0; i < totalSlides; i++) {
//         slides[i].style.transform = `translateX(${(i - currentIndex) * 100}%)`;
//     }
// }

// prevButton.addEventListener('click', () => {
//     showSlide(currentIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//     console.log('clicked');
//     showSlide(currentIndex + 1);
// });

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowLeft') {
//         showSlide(currentIndex - 1);
//     } else if (event.key === 'ArrowRight') {
//         showSlide(currentIndex + 1);
//     }
// });

// showSlide(currentIndex);