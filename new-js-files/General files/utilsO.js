import { getProductsStorage } from "./productsO.js";
// import { getCart, getDark, setCart } from "./storageO.js";
// import { cartCountStorage, cartStorageDisplay, getSavedCartButtonState, saveCartButtonState } from "./storageO.js";





//SHUFFLE ARRAY
export function shuffleArray(start, stop) {
    const generalProducts = getProductsStorage();
    const shuffled = [...generalProducts].sort(() => Math.random() - 0.5);
    return shuffled.slice(start, stop);
}





//CONVERT PRICE-CENTS
export function convertPrice(price) {
    return `$${(price / 100).toFixed(2)}`;
}










// //GENERAL REUSABLE FUNCTIONS
// export function truncateText(words, count = 12) {

//     if (words.length > count) {
//         return words.substring(0, count) + "...";
//     }

//     return words;

// }








//GENERAL NAVIGATIONS FUNCTIONS
// export function initializeNavBar() {
    
//     //TOGGLING NAVIGATIONS DISPLAY
//     const moves = document.querySelectorAll(".moves");

//     moves.forEach(m => {
//         m.addEventListener("click", () => {
//             moves.forEach((m) => m.classList.remove('bi-filled'));
//             m.classList.add('bi-filled');
//         })
//     })

//     //SMALL SCREENS BURGER MENU
//     const burger = document.querySelector(".burger");
//     const navsSm = document.querySelector(".navs-sm");

//     burger.addEventListener("click", (e) => {
//         e.preventDefault();
//         navsSm.classList.add('show');
    
//         const removeBurger = document.querySelector(".remove-burger");

//         removeBurger.addEventListener("click", (e) => {
//             e.preventDefault();
//             navsSm.classList.remove('show');
//         })
//     })

//     //SEARCH-BOX LOGIC
//     const searchInput = document.querySelector(".search-input");
    
//     const find = document.querySelector(".find");
    
//     function testParams() {
    
//         const query = searchInput.value;
    
//         if(query.length === 0) {
//             return;
//         } else {
//             searchInput.value = '';
    
//             window.location.assign(`home.html?q=${query}`);
    
//         }
    
//     }
    
    
//     find.addEventListener("click", () => {        
        
//         testParams();
    
//     })
    
//     searchInput.addEventListener("keydown", (e) => {
        
//         const what = e.key;
    
//         if (what === "Enter") {
    
//             testParams();
    
//         }
    
//     })


//     //INITIALIZING CART COUNT
//     const inCart = getCart();

//     const cartCount = document.querySelectorAll('.cart-count');
    
//     cartCount.forEach(c => {
//         c.innerHTML = inCart.length;
//     });
    


//     //ALERT 
//     document.addEventListener('click', (e) => {
//         const soon = e.target.closest(".soon");

//         if (!soon) return;
        
//         e.preventDefault();
//         const alert = document.querySelector(".alert-cont");
//         const exit = document.querySelector(".exit-alert");

//         if(alert.classList.contains('out')) {
//             return;
//         } else {
//             if(navsSm.classList.contains('show')){
//                 navsSm.classList.remove('show');
//             }
//             alert.classList.add('out');
//             automaticClear(alert);
//         }

//         exit.addEventListener("click", () => {
//             console.log("Exit clicked");
//             alert.classList.remove('out');
//         })

//     })

// }









// //CLEAR ALERT
// function automaticClear(alert) {

//     if(alert.classList.contains('out')) {
//         const timer = setTimeout(() => {
//             alert.classList.remove('out');
//         }, 5000)
    
//         return () => clearTimeout(timer);
//     }

// }













// //SET THEME
// export function setTheme() {
//     const isOn = getDark();

//     const theBody = document.querySelector('.the-body');

//     isOn && theBody.classList.add('darkmode');
// }



















//CART LOGIC
// export function addToCart(item) {

//     let inCart = getCart();

//     inCart.push(item);
    
//     setCart(inCart);

//     const cartCount = document.querySelectorAll('.cart-count');
    
//     cartCount.forEach(c => {
//         c.innerHTML = inCart.length;
//     })

// }

// export function removeFromCart(itemId) {

//     let inCart = getCart();

//     const cleanedCart = inCart.filter(id => id !== itemId);

//     setCart(cleanedCart);

//     const cartCount = document.querySelectorAll('.cart-count');
      
//     cartCount.forEach(c => {
//         c.innerHTML = cleanedCart.length || 0;
//     })

// }



















