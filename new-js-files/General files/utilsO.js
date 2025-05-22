import { cartCountStorage } from "./storageO.js";

export function updateCartCount() {
    const addBtn = document.querySelectorAll('.cart-track');
    let cartCount = cartCountStorage();
    const cartCountText = document.querySelector('.cart-count p');
    cartCountText.textContent = cartCount;

    addBtn.forEach(btn => {

        btn.addEventListener('click', () => {  

            if (btn.classList.contains('bi-cart2')) {
                btn.classList.remove('bi-cart2');
                btn.classList.add('bi-cart-check');
                cartCount++;
                cartCountText.textContent = cartCount;
            } else if (btn.classList.contains('bi-cart-check')) {
                btn.classList.remove('bi-cart-check');
                btn.classList.add('bi-cart2');
                cartCount--;
                cartCountText.textContent = cartCount;
            }

            cartCountText.textContent = cartCount;
            localStorage.setItem('cartCount', cartCount);

        });
    });
}

export function getCartCount() {
    return parseInt(localStorage.getItem('cartCount')) || 0;
}