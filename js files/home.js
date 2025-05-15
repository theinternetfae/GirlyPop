import { updateCart, navToggle } from "./checkout.js";
import { products } from "./products.js";

updateCart();
navToggle();

const forYou = document.querySelector('.for-you-products');

products.forEach(product => {
    forYou.innerHTML += `
        <div class="for-you-product">
            <div class="description-for-you">
                <div>
                    <h4>${product.name}</h4>
                    <p>$${(product.priceCents / 100).toFixed(2)}</p>    
                </div>
                <i class="bi bi-cart2 cart-track"></i>
            </div>
            <img src="${product.image}" alt="" class="products">
        </div>`;
})


const productPage = document.querySelector('.product-page');
const productsImges = document.querySelectorAll('.for-you-product img');
const back = document.querySelector('.bi-x-lg');

productsImges.forEach((productImage) => {
    productImage.addEventListener('click', () => {
    productPage.style.display = 'block';
    })
})

back.addEventListener('click', () => {
    productPage.style.display = 'none';
})

