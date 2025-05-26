import { getCartCount, getCartStorage } from "./General files/utilsO.js";

const cartCount = getCartCount();
const cartCountText = document.querySelector('.cart-count p');
const pageCartCount = document.querySelector('.the-cart-text span');
cartCountText.textContent = cartCount;
pageCartCount.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'}`;

const cartStorage = getCartStorage();
const itemsContainer = document.querySelector('.items-container');
const theTotal = document.querySelector('.checkout-products');

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
    
        const delivery = document.querySelector('.delivery').textContent;
        const deliveryPrice = Number(delivery.replace('$', '')) * 100;
        const priceProduct = document.querySelector('.total');
        priceProduct.innerHTML = `$${((deliveryPrice + item.priceCents) / 100).toFixed(2)}`;

        theTotal.innerHTML += `<div class="checkout-product">
            <p>${item.name}</p>
            <p>${priceProduct.textContent}</p>
        </div>`;
});