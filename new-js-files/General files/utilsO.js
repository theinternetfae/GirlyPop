import { getProductsStorage } from "./productsO.js";
// import { getCart, getDark, setCart } from "./storageO.js";
// import { cartCountStorage, cartStorageDisplay, getSavedCartButtonState, saveCartButtonState } from "./storageO.js";

const generalProducts = getProductsStorage();




//SHUFFLE ARRAY
export function shuffleArray(start, stop) {
    const shuffled = [...generalProducts].sort(() => Math.random() - 0.5);
    return shuffled.slice(start, stop);
}





//CONVERT PRICE-CENTS
export function convertPrice(price) {
    return `$${(price / 100).toFixed(2)}`;
}





//GENERATE PRODUCT CARD 
export function generateProductCard(relevantArray = generalProducts, displayField) {

    relevantArray.forEach(r => {
        displayField.innerHTML += `<div class="product" data-id="${r.id}">
            <img src="${r.image}" alt="${r.name}">
            <div class="product-info">
                
                <div class="pi-sect-one">
                    <p class="title">${r.name}</p>
                    <p class="sub-title">@${r.vendor} ● ${r.size}</p>
                    <p class="price">${convertPrice(r.priceCents)}</p>
                </div>

                <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
            
            </div>
        </div>`
    })

}




//GENERATE DETAILS PAGE
export function generateDetailPage(productsSelected, displayField, relevantArray = generalProducts) {

    productsSelected.forEach(p => {

        p.addEventListener('click', () => {

            const prodIdentity = p.dataset.id;
            const retrieveProduct = relevantArray.filter(r => r.id === prodIdentity);        
            const deets = retrieveProduct[0];

            displayField.innerHTML = `<div class="container no-scrollbar">

                    <i class="hgi hgi-stroke hgi-rounded hgi-door-open exit"></i>
                    
                    <div class="detail-cont detail-cont-one">
                        
                        <div class="img-holder">
                            <img src="${deets.image}" alt="${deets.name}">
                        </div>
                    
                        <div class="the-details">
                            
                            <div class="name">
                                <h3>${deets.name}</h3>            
                                <i class="hgi hgi-stroke hgi-alert-circle" title="${deets.statusMsg ? deets.statusMsg : "Product is in good shape"}" style="
                                    color: ${deets.status === "good" ? "green" : "#FFB000"}
                                "></i>
                            </div>

                            <p class="price-size">
                                ${convertPrice(deets.priceCents)} <span>●</span> <span>Size M</span>
                            </p>

                            <div class="vendor-info">
                                <button>
                                    View vendor
                                    <i class="hgi hgi-stroke hgi-eye"></i>
                                </button>
                                <p>@${deets.vendor}</p>
                                <button>
                                    Chat vendor
                                    <i class="hgi hgi-stroke hgi-chat"></i>
                                </button>
                            </div>

                            <button class="add-to-cart">
                                Add to Cart
                                <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
                            </button>

                            <div class="prod-description">
                                <p>Description</p>
                                <p>${deets.desc}</p>
                            </div>

                        </div>

                    </div>
                    
                    <div class="detail-cont-two">
                        <h3>More like this</h3>
                        
                        <div class="container">
                            <div class="product">
                                <img src="./images/tops/crochet-halter-top.jpeg" alt="">
                                <div class="product-info">
                                    
                                    <div class="pi-sect-one">
                                        <p class="title">Crochet halter-top</p>
                                        <p class="sub-title">@reynacole Size M</p>
                                        <p class="price">$18.00</p>
                                    </div>

                                    <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
                                
                                </div>
                            </div>

                            <div class="product">
                                <img src="./images/bottoms/summer-booty-shorts.jpeg" alt="">
                                <div class="product-info">
                                    
                                    <div class="pi-sect-one">
                                        <p class="title">Crochet halter-top</p>
                                        <p class="sub-title">@reynacole Size M</p>
                                        <p class="price">$18.00</p>
                                    </div>

                                    <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
                                
                                </div>
                            </div>
                            
                            <div class="product">
                                <img src="./images/accessories/butterfly-pendant.jpeg" alt="">
                                <div class="product-info">
                                    
                                    <div class="pi-sect-one">
                                        <p class="title">Crochet halter-top</p>
                                        <p class="sub-title">@reynacole Size M</p>
                                        <p class="price">$18.00</p>
                                    </div>

                                    <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
                                
                                </div>
                            </div>

                            <div class="product">
                                <img src="./images/shoes/flower-shoes.jpeg" alt="">
                                <div class="product-info">
                                    
                                    <div class="pi-sect-one">
                                        <p class="title">Crochet halter-top</p>
                                        <p class="sub-title">@reynacole Size M</p>
                                        <p class="price">$18.00</p>
                                    </div>

                                    <i class="hgi hgi-stroke hgi-rounded hgi-shopping-basket-add-01"></i>
                                
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>`


            displayField.classList.remove('hidden');
            
            const exit = document.querySelector('.exit');
            
            exit.addEventListener('click', () => {
                displayField.classList.add('hidden');
            })

        })

    })

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



















