import { Country, State, City } from "https://cdn.jsdelivr.net/npm/country-state-city/+esm";
import { convertPrice, initializeNavBar, setTheme, removeFromCart } from "./General files/utilsO.js";
import { getCart } from "./General files/storageO.js";
import { getProductsStorage, updateProductsStorage } from "./General files/productsO.js";

setTheme();
initializeNavBar();

let products = getProductsStorage();

function getCartProducts() {

    const inCart = getCart();

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

    removeFromCart(itemId);

    products = products.map(p => p.id === itemId ? {...p, inCart: !p.inCart} : p);
        

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








//LOCATION CODE

const countrySelect = document.querySelector(".country-select");
const stateSelect = document.querySelector(".state-select")
const citySelect = document.querySelector(".city-select")

const country = Country.getAllCountries();
console.log("Countries:", country);

const locationDeets = document.querySelector(".location-deets");

stateSelect.disabled = true;
citySelect.disabled = true;

countrySelect.innerHTML += `
    ${
        country.map(c => {
            return `<option value=${c.isoCode}>${c.name}</option>`;
        })
    }
`

countrySelect.addEventListener('change', () => {
    const pickedCountry = countrySelect.value;
    
    const state = State.getStatesOfCountry(pickedCountry.toString());
    console.log("Picked country's state:", state);
    stateSelect.disabled = false;

    stateSelect.innerHTML += `
        ${state.map(s => {
            return `<option value=${s.isoCode}>${s.name}</option>`
        })}
    `
})

stateSelect.addEventListener('change', () => {
    const pickedCountry = countrySelect.value;
    const pickedState = stateSelect.value;

    const city = City.getCitiesOfState(pickedCountry.toString(), pickedState.toString());
    console.log("Picked state's city:", city);
    citySelect.disabled = false;

    citySelect.innerHTML += `
        ${city.map(ci => {
            return `<option value=${ci.name}>${ci.name}</option>`
        })}
    `
})