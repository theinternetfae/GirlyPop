import { Country, State, City } from "https://cdn.jsdelivr.net/npm/country-state-city/+esm";
import { convertPrice, initializeNavBar, setTheme, removeFromCart } from "./General files/utilsO.js";
import { getCart, getLocation, setLocation } from "./General files/storageO.js";
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
const stateSelect = document.querySelector(".state-select");
const citySelect = document.querySelector(".city-select");

const country = Country.getAllCountries();

const locationDeets = document.querySelector(".location-deets");
let location = getLocation();
stateSelect.innerHTML = `<option value="" selected hidden>${location.state.name || 'State'}</option>`;
citySelect.innerHTML = `<option value="" selected hidden>${location.city || 'City'}</option>`;

stateSelect.disabled = true;
citySelect.disabled = true;

countrySelect.innerHTML += `
    ${
        country.map(c => {
            const savedCountry = location.country === c.isoCode;
            
            return `<option value=${c.isoCode} 
                ${savedCountry && 'selected'}
            >
                ${c.name}
            </option>`;
        })
    }
`

countrySelect.addEventListener('change', () => {
    const pickedCountry = countrySelect.value;
    
    location = {...location, country: pickedCountry};
    
    const state = State.getStatesOfCountry(pickedCountry.toString());

    stateSelect.disabled = false;

    stateSelect.innerHTML += `

        ${state.map(s => {
            const savedState = location.state === s.isoCode;
            return `<option 
                value=${[s.isoCode, s.name]}
                ${savedState && 'selected'}    
            >
                ${s.name}
            </option>`
        })}
    `

    console.log(location);
})

stateSelect.addEventListener('change', () => {
    const pickedCountry = countrySelect.value;
    const pickedState = stateSelect.value;
    const pickedStateValues = pickedState.split(',');

    location = {...location, state: {
        isoCode: pickedStateValues[0],
        name: pickedStateValues[1]
    }}

    const city = City.getCitiesOfState(pickedCountry.toString(), pickedStateValues[0].toString());
    citySelect.disabled = false;

    citySelect.innerHTML += `
        ${city.map(ci => {
            const savedCity = location.city === ci.isoCode;
            return `<option 
                value=${ci.name}
                ${savedCity && 'selected'}
            >
                ${ci.name}
            </option>`
        })}
    `

    console.log(location);
})

citySelect.addEventListener('change', () => {
    
    const pickedCity = citySelect.value;

    location = {...location, city: pickedCity};

    console.log(location);
})

function updateLocation() {
    const update = document.querySelector('.update-loc');

    update.addEventListener('click', () => {
        const unchangedLocation = getLocation();
        
        if (
            unchangedLocation.country === location.country && 
            unchangedLocation.state === location.state && 
            unchangedLocation.city === location.city
        ) return;

        setLocation(location);
    
        update.innerHTML = 'Saved!'
        stateSelect.disabled = true;
        citySelect.disabled = true;
        resetUpdatedDisplay(update);
    })
}

updateLocation();

function resetUpdatedDisplay(update) {
    const updatedDisplay = setTimeout(() => {
        update.innerHTML = 'Update';
    }, 4000);
}