import { addToCart, removeFromCart } from "./home.js";
import { saveCartButtonState, getSavedCartButtonState,} from "./utils.js";


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