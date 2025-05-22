export function cartCountStorage() {
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    localStorage.setItem('cartCount', cartCount);

    return cartCount;
}