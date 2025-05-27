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
                    <button class="bi bi-cart2 cart-track" data-product-id="${rItem.id}"></button>
                </div>
                <img src="${rItem.image}" alt="top">
            </div>`
    })
}

export function updateCartCount() {
    const addBtn = document.querySelectorAll('.cart-track');
    let cartCount = cartCountStorage();
    let addedToCartIds = getSavedCartButtonState();
    const cartCountText = document.querySelector('.cart-count p');
    cartCountText.textContent = cartCount;

    addBtn.forEach(btn => {
        const btnId = btn.dataset.productId;
        
        if (addedToCartIds.includes(btnId)) {
            btn.classList.remove('bi-cart2');
            btn.classList.add('bi-cart-check');
        } else {
            btn.classList.remove('bi-cart-check');
            btn.classList.add('bi-cart2');
        }

        btn.onclick = () => {  
            const allMatchingIds = document.querySelectorAll(`.cart-track[data-product-id="${btnId}"]`);
            let cartStorage = cartStorageDisplay();
            
            if(addedToCartIds.includes(btnId)) {

                allMatchingIds.forEach(b => {
                    b.classList.remove('bi-cart-check');
                    b.classList.add('bi-cart2');
                });
                
                addedToCartIds = addedToCartIds.filter(id => id !== btnId);
                cartStorage = cartStorage.filter(item => item.id !== btnId);
                cartCount--;
                
            } else {
                allMatchingIds.forEach(b => {
                    b.classList.remove('bi-cart2');
                    b.classList.add('bi-cart-check');
                });

                addedToCartIds.push(btnId);
                const product = products.find(p => p.id === btnId);
                if (product) {
                    cartStorage.push(product);
                }

                cartCount++;
            }

            saveCartButtonState(addedToCartIds);
            localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
            localStorage.setItem('cartCount', cartCount);
            cartCountText.textContent = cartCount;
        };
    });

    cartCountText.textContent = cartCount;
}

export function getCartCount() {
    return parseInt(localStorage.getItem('cartCount')) || 0;
}

export function getCartStorage() {
    return JSON.parse(localStorage.getItem('cartStorage')) || [];
}

// export function navToggle() {
//     const moves = document.querySelectorAll('.moves');
//     const white = document.querySelector('.cart-count p')

//     moves.forEach((move) => {

//         move.addEventListener('click', () => {
            
//             moves.forEach((m) => m.classList.remove('bi-filled'));

//             move.classList.add('bi-filled');

//             if(move.classList.contains('no')) {
//                 white.style.color = '#7e1036ee';
//             }
    
//         })
//     })
// }


// navToggle();