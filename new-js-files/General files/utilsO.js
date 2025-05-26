import { products } from "./productsO.js";
import { cartCountStorage, cartStorageDisplay, getSavedCartButtonState, saveCartButtonState } from "./storageO.js";

function featuredGenerator(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function featuredProducts() {
    const featuredP = document.querySelector('.featured-products');
    const randomProducts = featuredGenerator(products, 5);

    randomProducts.forEach(rItem => {
        featuredP.innerHTML +=`<div class="f-product">
                <div class="description">
                    <div class="description-text">
                        <h4 data-product-id="${rItem.id}">${rItem.name}</h4>
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
    let addedToCartIds = getSavedCartButtonState();

    addBtn.forEach(btn => {
        const btnId = btn.dataset.productId;
        
        if (addedToCartIds.includes(btnId)) {
            btn.classList.remove('bi-cart2');
            btn.classList.add('bi-cart-check');
        } else {
            btn.classList.remove('bi-cart-check');
            btn.classList.add('bi-cart2');
        }
    })

    cartCountText.textContent = cartCount;

    addBtn.forEach(btn => {

        btn.addEventListener('click', () => {  
            const btnId = btn.dataset.productId;
            let cartStorage = cartStorageDisplay();
            
            if (btn.classList.contains('bi-cart2')) {
                btn.classList.remove('bi-cart2');
                btn.classList.add('bi-cart-check');
                cartCount++;
                cartCountText.textContent = cartCount;


                products.forEach(product => {
                    if (btnId === product.id) {
                    cartStorage.push(product);
                    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
                    }
                })
      
                if (!addedToCartIds.includes(btnId)) {
                    addedToCartIds.push(btnId);
                    saveCartButtonState(addedToCartIds);
                }

            } else if (btn.classList.contains('bi-cart-check')) {
                btn.classList.remove('bi-cart-check');
                btn.classList.add('bi-cart2');
                cartCount--;
                cartCountText.textContent = cartCount;

                cartStorage = cartStorage.filter(item => item.id !== btnId);
                localStorage.setItem('cartStorage', JSON.stringify(cartStorage));

                addedToCartIds = addedToCartIds.filter(id => id !== btnId);
                saveCartButtonState(addedToCartIds);
            }

            cartCountText.textContent = cartCount;
            localStorage.setItem('cartCount', cartCount);

        });
    });
}

export function getCartCount() {
    return parseInt(localStorage.getItem('cartCount')) || 0;
}

export function getCartStorage() {
    return JSON.parse(localStorage.getItem('cartStorage')) || [];
}

