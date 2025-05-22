import { products } from "./productsO.js";
import { cartCountStorage } from "./storageO.js";

function featuredGenerator(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function featuredProducts() {
    const featuredP = document.querySelector('.featured-products');

    const randomProducts = featuredGenerator(products, 5);

    console.log(randomProducts);

    randomProducts.forEach(rItem => {
        featuredP.innerHTML +=`<div class="f-product">
                <div class="description">
                    <div class="description-text">
                        <h4>${rItem.name}</h4>
                        <p>$${(rItem.priceCents / 100).toFixed(2)}</p>    
                    </div>
                    <i class="bi bi-cart2 cart-track"></i>
                </div>
                <img src="${rItem.image}" alt="top">
            </div>`
    })

}


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