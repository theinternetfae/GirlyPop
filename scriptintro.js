
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
const firstChild = sliderTrack.children[0];
const clonedSlide = firstChild.cloneNode(true);
sliderTrack.appendChild(clonedSlide)
const slideWidth = 1511; 
const wardrobe = document.querySelector('.wardrobe');
const totalSlides = document.querySelectorAll('.slide').length;

setInterval(() => {
  currentIndex++;
  console.log(currentIndex);
  sliderTrack.style.transition = 'transform 0.5s ease';
  sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      sliderTrack.style.transition = 'none';
      sliderTrack.style.transform = 'translateX(0px)';
      currentIndex = 0;
    }, 1000)
  }

  if(currentIndex === 0){
    wardrobe.innerHTML = 'Tops';
  } else if (currentIndex === 1) {
    wardrobe.innerHTML = 'Bottoms';
  } else if (currentIndex === 2) {
    wardrobe.innerHTML = 'Dresses';
  } else if (currentIndex === 3) {
    wardrobe.innerHTML = 'Shoes';
  } else if (currentIndex === 4) {
    wardrobe.innerHTML = 'Accessories';
  } else {
    wardrobe.innerHTML = 'Tops';
  }

}, 3000)