import { addToCart, removeFromCart } from "./home.js";
import { saveCartButtonState, getSavedCartButtonState } from "./utils.js";
import { cartStorage } from "./cart.js";

export function updateCart() {
    const cart = document.querySelectorAll('.cart-track');
    const cartCount = document.querySelector('.cart-count p');
    let cartCounting = 0;

    let addedToCartIds = getSavedCartButtonState();

    cart.forEach((cartBtn) => {
        const productId = cartBtn.dataset.productId;
        if (addedToCartIds.includes(productId)) {
            cartBtn.classList.remove('bi-cart2');
            cartBtn.classList.add('bi-cart-check');
            cartCounting++;
        } else {
            cartBtn.classList.remove('bi-cart-check');
            cartBtn.classList.add('bi-cart-2');
        }
    });

    cartCount.innerHTML = cartCounting;

    cart.forEach((cartBtn) => {
        cartBtn.addEventListener('click', () => {
            const productId = cartBtn.dataset.productId;

            if(cartBtn.classList.contains('bi-cart2')){
                cartBtn.classList.remove('bi-cart2');
                cartBtn.classList.add('bi-cart-check');
                cartCounting++;
                addToCart(cartBtn);

                if (!addedToCartIds.includes(productId)) {
                    addedToCartIds.push(productId);
                    saveCartButtonState(addedToCartIds);
                }
            } else if(cartBtn.classList.contains('bi-cart-check')) {
                cartBtn.classList.remove('bi-cart-check');
                cartBtn.classList.add('bi-cart2');
                cartCounting--;
                removeFromCart(cartBtn);

                addedToCartIds = addedToCartIds.filter(id => id !== productId);
                saveCartButtonState(addedToCartIds);
            }

            cartCount.innerHTML = cartCounting;
        })
    })
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

export function navToggle() {
    const moves = document.querySelectorAll('.moves');
    const white = document.querySelector('.cart-count p')

    moves.forEach((move) => {

        move.addEventListener('click', () => {
            
            moves.forEach((m) => m.classList.remove('bi-filled'));

            move.classList.add('bi-filled');

            if(move.classList.contains('no')) {
                white.style.color = '#7e1036ee';
            }
    
        })
    })
}




navToggle();