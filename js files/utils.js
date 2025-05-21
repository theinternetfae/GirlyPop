import { cartStorage } from "./storage.js";

export function saveCartButtonState(productIds) {
    localStorage.setItem('addedToCartIds', JSON.stringify(productIds));
}

export function getSavedCartButtonState() {
    return JSON.parse(localStorage.getItem('addedToCartIds')) || [];
}

export function cartShow() {
    const itemsContainer = document.querySelector('.items-container');

    console.log(itemsContainer);
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
                <p class="price">${item.priceCents}</p>
                <p class="delivery">$5.40</p>
                <p class="total">$25.90</p>
            </div>

            </div>`;
    })
}

export function forYouProducts(products) {
    const forYou = document.querySelector('.for-you-products');
    
    products.forEach(product => {
        forYou.innerHTML += `
            <div class="for-you-product">
                <div class="description-for-you">
                    <div class="pop-up">
                        <h4>${product.name}</h4>
                        <p>$${(product.priceCents / 100).toFixed(2)}</p>    
                    </div>
                    <button class="bi-cart2 cart-track" data-product-id="${product.id}"></button>
                </div>
                <img src="${product.image}" alt="" class="products">
            </div>`;
    });
}