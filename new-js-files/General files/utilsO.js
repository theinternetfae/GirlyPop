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

export function updateCartShove() {
    const shoving = document.querySelectorAll('.shoving');
    let cartCount = cartCountStorage();
    let addedToCartIds = getSavedCartButtonState();
    const cartCountText = document.querySelector('.cart-count p');
    cartCountText.textContent = cartCount;

    shoving.forEach(shovBtn => {
        const shovId = shovBtn.dataset.productId;

        if (addedToCartIds.includes(shovId)) {
            shovBtn.classList.remove('shove');
            shovBtn.classList.add('shoved');
            shovBtn.textContent = 'Shoved in bag';
        } else {
            shovBtn.classList.remove('shoved');
            shovBtn.classList.add('shove');
            shovBtn.textContent = 'Shove in bag';
        }

        shovBtn.onclick = () => {
            const allMatchingIdsShovIds = document.querySelectorAll(`.shoving[data-product-id="${shovId}"]`);
            let cartStorage = cartStorageDisplay();

            if(addedToCartIds.includes(shovId)) {

                allMatchingIdsShovIds.forEach(a => {
                    a.classList.remove('shoved');
                    a.classList.add('shove');
                    shovBtn.textContent = 'Shove in bag';
                });

                addedToCartIds = addedToCartIds.filter(id => id !== shovId);
                cartStorage = cartStorage.filter(item => item.id !== shovId);
                cartCount--;

            } else {

                allMatchingIdsShovIds.forEach(a => {
                    a.classList.remove('shove');
                    a.classList.add('shoved');
                    shovBtn.textContent = 'Shoved in bag';
                })

                addedToCartIds.push(shovId);
                const product = products.find(p => p.id === shovId);
                if (product) {
                    cartStorage.push(product);
                }

                cartCount++;
            }

            saveCartButtonState(addedToCartIds);
            localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
            localStorage.setItem('cartCount', cartCount);
            cartCountText.textContent = cartCount;
        
            updateCartCount();
        };
    });

    cartCountText.textContent = cartCount;
}

export function deleteFromCart(uiDelete, newCartCount) {
    let cartCount = cartCountStorage();
    let addedToCartIds = getSavedCartButtonState();
    const cartCountText = document.querySelector('.cart-count p');
    cartCountText.textContent = cartCount;

    const uiDeleteId = uiDelete.dataset.productId;
    const updatedCart = getCartStorage().filter(item => item.id !== uiDeleteId);
    if (addedToCartIds.includes(uiDeleteId)) {
        uiDelete.classList.remove('bi-cart-check');
        uiDelete.classList.add('bi-cart2');
        cartCount--;
        addedToCartIds = addedToCartIds.filter(id => id !== uiDeleteId);
    }

    saveCartButtonState(addedToCartIds);
    localStorage.setItem('cartStorage', JSON.stringify(updatedCart));
    localStorage.setItem('cartCount', cartCount);
    cartCountText.textContent = cartCount;
    newCartCount.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'}`;

}

export function getCartCount() {
    return parseInt(localStorage.getItem('cartCount')) || 0;
}

export function getCartStorage() {
    return JSON.parse(localStorage.getItem('cartStorage')) || [];
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