import { getCartCount, getCartStorage } from "./General files/utilsO.js";

const cartCount = getCartCount();
const cartCountText = document.querySelector('.cart-count p');
const pageCartCount = document.querySelector('.the-cart-text span');
cartCountText.textContent = cartCount;
pageCartCount.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'}`;

const cartStorage = getCartStorage();
const itemsContainer = document.querySelector('.items-container');
const theTotal = document.querySelector('.the-total');

    cartStorage.forEach(item => {
        itemsContainer.innerHTML += `<div class="cart-item">

            <i class="bi bi-x-lg"></i>

            <div class="product">
                <img src="${item.image}" alt="">
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p>Status: Damaged</p>
                    <p>Size: Medium</p>
                    <p>Location: Austen, Texas</p>
                </div>
            </div>

            <div class="others">
                <p class="price">$${(item.priceCents / 100).toFixed(2)}</p>
                <p class="delivery">$5.40</p>
                <p class="total">$25.90</p>
            </div>

            </div>`;
    });

    // function calculatingTotal() {
    //     theTotal.innerHTML += `<div class="checkout-product">
    //         <p>${item.name}</p>
    //         <p>$${(item.priceCents / 100).toFixed(2)}</p>
    //     </div>`
    // }

        
    