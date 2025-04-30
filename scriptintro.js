const backward = document.querySelector('.prev-button');
const forward = document.querySelector('.next-button');
const slides = document.querySelectorAll('.slide');

const array = [];

slides.forEach(slide => {
    array.push(slide);
})


function rotateSlide() {
    array.push(array.shift());

    console.log(array); 
}


//HTML
{/* <div class="slider-container">
  <div class="slider-track">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </div>
</div>

<button id="next">Next</button>
<button id="prev">Prev</button> */}

//CSS
// .slider-container {
//     width: 300px;
//     overflow: hidden;
//     position: relative;
//   }
  
//   .slider-track {
//     display: flex;
//     transition: transform 0.5s ease;
//   }
  
//   .slide {
//     min-width: 300px;
//     flex-shrink: 0;
//     text-align: center;
//     padding: 40px;
//     background: lightgray;
//     border: 1px solid #ccc;
//   }
  

//JAVASCRIPT
// const track = document.querySelector('.slider-track');
// const next = document.getElementById('next');
// const prev = document.getElementById('prev');

// let currentIndex = 0;
// const slideWidth = 300; // Must match CSS width

// next.addEventListener('click', () => {
//   currentIndex++;
//   track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
// });

// prev.addEventListener('click', () => {
//   currentIndex = Math.max(0, currentIndex - 1); // Prevent going below 0
//   track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
// });
