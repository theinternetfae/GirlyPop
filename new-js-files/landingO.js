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



const product = document.querySelectorAll('.product');
const productDetails = document.querySelector('.full-product-details');
const exit = document.querySelector('.exit');

product.forEach(p => {

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