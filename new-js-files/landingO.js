import { convertPrice, shuffleArray } from "./General files/utilsO.js";

const header = document.getElementById('header');

window.addEventListener("scroll", (event) => {
    if(window.scrollY === 0) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
    }
}) 


const burger = document.querySelector('.burger');
const smNav = document.querySelector('.sm-nav');
const smLink = document.querySelectorAll('.sm-link');

burger.addEventListener("click", () => {

    burger.classList.toggle('hgi-menu-01')
    burger.classList.toggle('hgi-cancel-01')

    smNav.classList.toggle('show');
    console.log("Clicked!");

})

smLink.forEach(sm => {

    sm.addEventListener("click", () => {

        burger.classList.remove('hgi-cancel-01')
        burger.classList.add('hgi-menu-01')

        smNav.classList.remove('show');

    })

})





//SHUFFLE PRODUCTS ARRAY THEN DISPLAY
const shuffled = shuffleArray(0, 12);
const productDisplay = document.querySelector('.product-display');

shuffled.forEach(s => {
    productDisplay.innerHTML += `<div class="product">
        <img src="${s.image}" alt="${s.name}">
        <div class="product-info">
            
            <div class="pi-sect-one">
                <p class="title">${s.name}</p>
                <p class="sub-title">@reynacole Size M</p>
                <p class="price">${convertPrice(s.priceCents)}</p>
            </div>

            <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
        
        </div>
    </div>`
})








//SHOW PRODUCT DETAILS ON PRODUCT CLICK
const products = document.querySelectorAll('.product');
const productDetails = document.querySelector('.full-product-details');
const exit = document.querySelector('.exit');

products.forEach(p => {

    p.addEventListener('click', () => {
        productDetails.classList.remove('hidden');
    })

})

exit.addEventListener('click', () => {
    productDetails.classList.add('hidden');
})










// import { setTheme } from "./General files/utilsO.js";

// setTheme();

// const burger = document.querySelector(".burger");
// const navsSm = document.querySelector(".navs-sm");

// burger.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Burger clicked!");
//     navsSm.classList.toggle('show');

//     const removeBurger = document.querySelector(".remove-burger");

//     removeBurger.addEventListener("click", (e) => {
//         e.preventDefault();
//         navsSm.classList.remove('show');
//     })
// })

// const soon = document.querySelectorAll(".soon");
// const alert = document.querySelector(".alert-cont");
// const exit = document.querySelector(".exit-alert");

// soon.forEach(s => {
//     s.addEventListener("click", (e) => {
//         e.preventDefault();
//         if(alert.classList.contains('out')) {
//             return;
//         } else {
//             if(navsSm.classList.contains('show')){
//                 navsSm.classList.remove('show');
//             }
//             alert.classList.add('out');
//             automaticClear();
//         }
//     })
// })

// exit.addEventListener("click", () => {
//     console.log("Exit clicked");
//     alert.classList.remove('out');
// })

// function automaticClear() {

//     if(alert.classList.contains('out')) {
//         const timer = setTimeout(() => {
//             alert.classList.remove('out');
//         }, 8000)
    
//         return () => clearTimeout(timer);
//     }

// }