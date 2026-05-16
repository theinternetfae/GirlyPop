export function getCart() {
    let inCart = JSON.parse(localStorage.getItem('inCart')) || [];

    return inCart;
}

export function setCart(newCart) {
    localStorage.setItem('inCart', JSON.stringify(newCart));
}