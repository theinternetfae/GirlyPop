export function saveCartButtonState(productIds) {
    localStorage.setItem('addedToCartIds', JSON.stringify(productIds));
}

export function getSavedCartButtonState() {
    return JSON.parse(localStorage.getItem('addedToCartIds')) || [];
}

