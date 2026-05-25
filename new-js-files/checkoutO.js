// import { products } from "./General files/productsO.js";
// import { getCartCount, getCartStorage, deleteFromCart } from "./General files/utilsO.js";
// // import { Country, State, City } from "country-state-city";
import { convertPrice, initializeNavBar, setTheme } from "./General files/utilsO.js";
import { getCart } from "./General files/storageO.js";
import { getProductsStorage, updateProductsStorage } from "./General files/productsO.js";
import { removeFromCart } from "./General files/utilsO.js";

setTheme();
initializeNavBar();

let products = getProductsStorage();


function getCartProducts() {

    const inCart = getCart();

    console.log("In the Cart:", inCart);

    const inCartProducts = [];

    inCart.forEach(i => {
        products.map(p => p.id === i && inCartProducts.push(p));
    })

    return inCartProducts;
}

function renderCart() {

    const inCartProducts = getCartProducts();

    //Label
    const cartLabel = document.querySelector('.cart-label');
    cartLabel.innerHTML = `${inCartProducts.length === 1 ? 'Item' : 'Items' }`;

    const cartProductsCont = document.querySelector('.the-cart-products');

    console.log("cartProductsCont:", cartProductsCont);

    cartProductsCont.innerHTML = '';

    inCartProducts.forEach(i => {
        cartProductsCont.innerHTML += `
            <div class="cart-product">
                <i class="bi bi-x-lg remove-from" data-productId="${i.id}"></i>

                <div class="cart-product-info">
                    <img src="${i.image}" alt="">
                    <div class="cart-product-details">
                        <p><span>Name:</span> ${i.name}</p>
                        <p><span>Price:</span> <span class="price">${convertPrice(i.priceCents)}</span></p>
                        <p><span>Fault:</span> ${i.wrong ? i.wrong : 'None'}</p>
                    </div>
                </div>
            </div>
            
        `;
    });

}


document.addEventListener('click', (e) => {
    
    const removeFrom = e.target.closest('.remove-from');

    e.stopPropagation();

    if (!removeFrom) return;

    const itemId = removeFrom.dataset.productid;

    console.log("Removing from cart");
    removeFromCart(itemId);

    products = products.map(p => p.id === itemId ? {...p, inCart: !p.inCart} : p);
        

    console.log("Updating products storage:", products);
    updateProductsStorage(products);
    

    renderFullCart();
})










function renderPrice() {

    const inCartProducts = getCartProducts();

    const priceBreakdown = document.querySelector('.price-breakdown');

    let total = 0;

    priceBreakdown.innerHTML = '';
    inCartProducts.forEach(i => {
        priceBreakdown.innerHTML += `
            <div class="price-b">
                <p>${i.name}</p>
                <p>${convertPrice(i.priceCents)}</p>
            </div>
        `

        total += i.priceCents;
    })

    console.log(total)
    priceBreakdown.innerHTML += `
        <div class="price-total">
            <p>TOTAL</p>
            <p>${convertPrice(total)}</p>
        </div>
    `
}


function renderFullCart() {
    renderCart();
    renderPrice();
}

renderFullCart();
