import { getCartCount } from "./General files/utilsO.js";

const cartCount = getCartCount();
const cartCountText = document.querySelector('.cart-count p');
const pageCartCount = document.querySelector('.the-cart-text span');
cartCountText.textContent = cartCount;
pageCartCount.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'}`;

