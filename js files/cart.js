export const cartStorage = JSON.parse(localStorage.getItem('cartStorage')) || [ ];

export function saveToStorage() {
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
};

export function addToCart(productId) {
    cartStorage.push({
        productId       
    })

    saveToStorage();
}