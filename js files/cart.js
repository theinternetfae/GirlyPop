export let cartStorage = JSON.parse(localStorage.getItem('cartStorage')) || [ ];

export function saveCartStorage() {
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
}

// localStorage.clear();