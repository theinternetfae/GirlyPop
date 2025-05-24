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

localStorage.clear();