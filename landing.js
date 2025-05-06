const cart = document.querySelectorAll('.cart-track');
const cartCount = document.querySelector('.cart-count p');
let cartCounting = 0;

cart.forEach((cartBtn) => {
    cartBtn.addEventListener('click', () => {
        if(cartBtn.classList.contains('bi-cart2')){
            cartBtn.classList.remove('bi-cart2');
            cartBtn.classList.add('bi-cart-check');
            cartCounting++;
            cartCount.innerHTML = cartCounting;    
        } else if(cartBtn.classList.contains('bi-cart-check')) {
            cartBtn.classList.remove('bi-cart-check');
            cartBtn.classList.add('bi-cart2');
            cartCounting--;
            cartCount.innerHTML = cartCounting;
        }

        console.log('clicked');
    })
})

const featured = document.querySelector('.featured-products');

console.log(featured);
// //SLIDER JS

// let currentIndex = -1;
// const sliderTrack = document.querySelector('.image-slider');
// const firstChild = sliderTrack.children[0];
// const clonedSlide = firstChild.cloneNode(true);
// sliderTrack.appendChild(clonedSlide)
// const slideWidth = 1511; 
// const totalSlides = document.querySelectorAll('.slide').length;


// const wardrobe = document.querySelector('.wardrobe');
// function setWardrobeText(text) {
//   wardrobe.innerHTML = text;
//   wardrobe.style.animation = 'none'; 
//   wardrobe.offsetHeight;
//   wardrobe.style.animation = 'typing 1.5s steps(20, end) forwards';
// }

// setInterval(() => {
//   currentIndex++;
//   console.log(currentIndex);
//   sliderTrack.style.transition = 'transform 0.5s ease';
//   sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

//   if (currentIndex === totalSlides - 1) {
//     setTimeout(() => {
//       sliderTrack.style.transition = 'none';
//       sliderTrack.style.transform = 'translateX(0px)';
//       currentIndex = 0;
//     }, 1000)
//   }

//     if (currentIndex === 1) {
//       setWardrobeText('Bottoms');
//     } else if (currentIndex === 2) {
//       setWardrobeText('Dresses');
//     } else if (currentIndex === 3) {
//       setWardrobeText('Shoes');
//     } else if (currentIndex === 4) {
//       setWardrobeText('Accessories');
//     } else {
//       setWardrobeText('Tops');
//     }

// }, 3000)