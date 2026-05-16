// import { products } from "./General files/productsO.js";
// import { getCartCount, getCartStorage, deleteFromCart } from "./General files/utilsO.js";
// // import { Country, State, City } from "country-state-city";
import { initializeNavBar } from "./General files/utilsO.js";
import { getCart } from "./General files/storageO.js";
import { getProductsStorage } from "./General files/productsO.js";
import { removeFromCart } from "./General files/utilsO.js";

initializeNavBar();

const products = getProductsStorage();

function renderCart() {

    const inCart = getCart();
    console.log("In the Cart:", inCart);

    //Label
    const cartLabel = document.querySelector('.cart-label');
    cartLabel.innerHTML = `${inCart.length === 1 ? 'Item' : 'Items' }`;

    const cartProductsCont = document.querySelector('.the-cart-products');


    const inCartProducts = [];

    inCart.forEach(i => {
        products.map(p => p.id === i && inCartProducts.push(p));
    })

    console.log("cartProductsCont:", cartProductsCont);

    cartProductsCont.innerHTML = '';

    inCartProducts.forEach(i => {
        cartProductsCont.innerHTML += `
            <div class="cart-product">
                <i class="bi bi-x-lg remove-from" data-productId="${i.id}"></i>

                <div class="cart-product-info">
                    <img src="${i.image}" alt="">
                    <div class="cart-product-details">
                        <p><span>Name:</span> ${i.name}</p>
                        <p><span>Price:</span> <span class="price">$${(i.priceCents / 100).toFixed(2)}</span></p>
                        <p><span>Fault:</span> ${i.fault || 'None'}</p>
                    </div>
                </div>
            </div>
            
        `;
    });
}

renderCart();










// const cartCount = getCartCount();
// const cartCountText = document.querySelector('.cart-count p');
// const pageCartCount = document.querySelector('.the-cart-text span');
// cartCountText.textContent = cartCount;
// pageCartCount.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'}`;

// function renderCart() {
//     const cartStorage = getCartStorage();
//     const itemsContainer = document.querySelector('.items-container');
//     itemsContainer.innerHTML = '';

//     cartStorage.forEach(item => {
//         itemsContainer.innerHTML += `<div class="cart-item">

//             <i class="bi bi-x-lg delete-button" data-product-id="${item.id}"></i>

//             <div class=cart-items-display>
//                 <div class="product">
//                     <img src="${item.image}" alt="">
//                     <div class="product-info">
//                         <h3>${item.name}</h3>
//                         <p>Status: Perfect</p>
//                         <p>Size: Medium</p>
//                         <p>Location: Austen, Texas</p>
//                         <p class="delivery-date">Delivery Date: August 20th</p>
//                     </div>
//                 </div>

//                 <div class="others">
//                     <p class="price">$${(item.priceCents / 100).toFixed(2)}</p>
//                     <p class="delivery">$5.40</p>
//                     <p class="total" data-product-id="${item.id}">$25.90</p>
//                 </div>
//             </div>

//         </div>`;
//     });

//     const deleteItemBtn = document.querySelectorAll('.delete-button');

//     deleteItemBtn.forEach(deleteBtn => {
//         deleteBtn.addEventListener('click', () => {
//             deleteFromCart(deleteBtn, pageCartCount);
//             renderCart();
//         });
//     });

//     console.log(cartStorage);
//     totalProducts();
// }

// renderCart();


// function totalProducts() {
//     const delivery = '$5.40';
//     const deliveryPrice = Number(delivery.replace('$', '')) * 100;
//     const productTotal = document.querySelectorAll('.total');
//     const theTotal = document.querySelector('.checkout-products');
//     let testThree = 0;
//     theTotal.innerHTML = '';

//     productTotal.forEach(total => {

//         const productTotalId = total.dataset.productId;

//         products.forEach(product => {

//             if (productTotalId === product.id){
//                 total.innerHTML = `$${((deliveryPrice + product.priceCents) / 100).toFixed(2)}`;

//                 theTotal.innerHTML += `<div class="checkout-product">
//                 <p>${product.name}</p>
//                 <p>${total.textContent}</p>
//                 </div>`;
//             };

//         });

//         const test = total.textContent;
//         const testTwo = Number(test.replace('$', '')) * 100;
//         testThree += testTwo;
//         document.querySelector('.overall-total').textContent = `$${(testThree / 100).toFixed(2)}`;
//     });

//     const cartStorage = getCartStorage();
    
//     if (cartStorage.length === 0) {
//         document.querySelector('.overall-total').textContent = '$0.00';
//     };
// }