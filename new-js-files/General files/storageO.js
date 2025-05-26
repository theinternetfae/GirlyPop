export function cartCountStorage() {
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    localStorage.setItem('cartCount', cartCount);

    return cartCount;
}

export function cartStorageDisplay() {
    let cartStorage = JSON.parse(localStorage.getItem('cartStorage')) || [];

    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));

    return cartStorage;
}

export function saveCartButtonState(productIds) {
    localStorage.setItem('addedToCartIds', JSON.stringify(productIds));
}

export function getSavedCartButtonState() {
    return JSON.parse(localStorage.getItem('addedToCartIds')) || [];
}

// localStorage.clear();