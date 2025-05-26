import { products } from "./General files/productsO.js";
import { getCartCount, getCartStorage } from "./General files/utilsO.js";

const cartCount = getCartCount();
const cartCountText = document.querySelector('.cart-count p');
const pageCartCount = document.querySelector('.the-cart-text span');
cartCountText.textContent = cartCount;
pageCartCount.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'}`;

const cartStorage = getCartStorage();
const itemsContainer = document.querySelector('.items-container');

    cartStorage.forEach(item => {
        itemsContainer.innerHTML += `<div class="cart-item">

            <i class="bi bi-x-lg"></i>

            <div class="product">
                <img src="${item.image}" alt="">
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p>Status: Perfect</p>
                    <p>Size: Medium</p>
                    <p>Location: Austen, Texas</p>
                </div>
            </div>

            <div class="others">
                <p class="price">$${(item.priceCents / 100).toFixed(2)}</p>
                <p class="delivery">$5.40</p>
                <p class="total" data-product-id="${item.id}">$25.90</p>
            </div>

        </div>`;

    });


    const delivery = document.querySelector('.delivery').textContent;
    const deliveryPrice = Number(delivery.replace('$', '')) * 100;
    const productTotal = document.querySelectorAll('.total');
    const theTotal = document.querySelector('.checkout-products');
    let testThree = 0;
    
    productTotal.forEach(total => {

        const productTotalId = total.dataset.productId;
    
        products.forEach(product => {

            if (productTotalId === product.id){
   
                total.innerHTML = `$${((deliveryPrice + product.priceCents) / 100).toFixed(2)}`;
            
                theTotal.innerHTML += `<div class="checkout-product">
                <p>${product.name}</p>
                <p>${total.textContent}</p>
                </div>`;

            }

        });

        const test = total.textContent;
        const testTwo = Number(test.replace('$', '')) * 100;
        testThree += testTwo;
        document.querySelector('.overall-total').textContent = `$${(testThree / 100).toFixed(2)}`;

    });