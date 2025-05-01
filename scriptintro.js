
//NAVIGATION TOGGLE
function onOff(button) {
  const active = button;
  const prev = document.querySelector('.nav-active');
  
  if (prev) {
    prev.classList.remove('nav-active');
  }

  active.classList.add('nav-active');

}

const buttonOne = document.querySelector('.nav-one');
const buttonTwo = document.querySelector('.nav-two');
const buttonThree = document.querySelector('.nav-three');

buttonOne.addEventListener('click', () => {
  onOff(buttonOne);
})

buttonTwo.addEventListener('click', () => {
  onOff(buttonTwo);
})

buttonThree.addEventListener('click', () => {
  onOff(buttonThree);
})



//SLIDER JS

let currentIndex = 0;
const sliderTrack = document.querySelector('.image-slider');
const slideWidth = 700; 
const wardrobe = document.querySelector('.wardrobe');
const totalSlides = document.querySelectorAll('.slide').length;

function goToSlide(index) {
  sliderTrack.style.transform = `translateX(-${slideWidth * index}px)`;

  if(index === 0){
    wardrobe.innerHTML = 'Tops';
    wardrobe.href = 'tops.html'
  } else if (index === 1) {
    wardrobe.innerHTML = 'Bottoms';
    wardrobe.href = 'bottoms.html'
  } else if (index === 2) {
    wardrobe.innerHTML = 'Dresses';
    wardrobe.href = 'dresses.html'
  } else if (index === 3) {
    wardrobe.innerHTML = 'Shoes';
    wardrobe.href = 'shoes.html'
  } else if (index === 4) {
    wardrobe.innerHTML = 'Accessories';
    wardrobe.href = 'accessories.html'
  }
}

const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');

prev.addEventListener('click', () => {
  PrevSlide();
})

next.addEventListener('click', () => {
  nextSlide();
})

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    goToSlide(currentIndex);
  }
}

function PrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    goToSlide(currentIndex);
  }
}

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % totalSlides; 
//   goToSlide(currentIndex);
// }, 2000);