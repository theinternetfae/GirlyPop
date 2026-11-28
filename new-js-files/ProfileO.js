import { getProductsStorage } from "./General files/productsO.js";
import { getUser } from "./General files/storageO.js";
import { generateDetailPage, generateProductCard, handleChatSection, searchItems } from "./General files/utilsO.js";

const burger = document.querySelector('.burger');
const smNav = document.querySelector('.sm-nav');

const currentUser = getUser();
console.log("Current user", currentUser);

burger.addEventListener("click", () => {

    burger.classList.toggle('hgi-menu-01');
    burger.classList.toggle('hgi-cancel-01');

    smNav.classList.toggle('show');
    console.log("Clicked!");

})




//GET PROFILE LAYOUT + USER DETAILS INTEGRATED
function getLayout() {

    const sectOne = document.querySelector('.sect-one');
    const sectTwo = document.querySelector('.sect-two');

    sectOne.innerHTML=`<section class="profile-banner">
            <img src="${currentUser.banner}" alt="banner-img">
        </section>
        
        <section class="profile-info">
            
            <div class="pfp-name">
                <div class="img-border">
                    <div class="img">
                        <img src="${currentUser.pfp}" alt="pfp-img">
                    </div>
                </div>
            
                <div class="name-user">
                    <h2>${currentUser.fullName}</h2>
                    <p>@${currentUser.username} • ${currentUser.location}</p>
                </div>
            </div>
            
            <a href="./editp.html" class="button"> ${currentUser.defaultUser ? 'Edit profile' : 'Follow'} </a>
        
        </section>        
    `

    sectTwo.innerHTML=`<div class="stats">
            <div class="stat">
                <h2>42</h2>
                <p>Listings</p>
            </div>
            
            <div class="stat">
                <h2>318</h2>
                <p>Sold</p>
            </div>
            
            <div class="stat">
                <h2>1.2K</h2>
                <p>Followers</p>
            </div>
            
            <div class="stat">
                <h2>186</h2>
                <p>Following</p>
            </div>
            
            <div class="stat">
                <h2>
                    4.9
                    <i class="hgi hgi-stroke hgi-rounded hgi-star-award-02"></i>
                </h2>
                <P>Rating</P>
            </div>
        
        </div>

        <p class="bio">${currentUser.about}</p>
    `

}

getLayout();











//GET USER PRODUCTS ARRAY THEN DISPLAY
const generalProducts = getProductsStorage();
const userProducts = generalProducts.filter(p => p.vendor.toLowerCase() === "reynacole");
const productDisplay = document.querySelector('.products-display');

generateProductCard(userProducts, productDisplay, currentUser.defaultUser);
searchItems(userProducts, productDisplay, undefined);




//PRODUCT DETAILS DISPLAY ON CLICK
const productDetails = document.querySelector('.full-product-details');

document.addEventListener('click', (e) => {
    const product = e.target.closest('.product img');

    if(!product) return;
    
    generateDetailPage(product, productDetails);
})


//CHAT SECTION
handleChatSection();












// import { getDark, setDark } from "./General files/storageO.js";
// import { initializeNavBar, setTheme } from "./General files/utilsO.js";

// setTheme();
// initializeNavBar();

// function togglingTheme() {

//     let isOn = getDark();
//     const modeToggle = document.querySelector('.mode-toggle');

//     modeToggle.innerHTML = `<div class="toggle-switch 
//         ${isOn ? 'bi-moon-fill' : 'bi bi-brightness-high-fill'} 
//         ${isOn ? 'slide' : ''}"
        
//         style='
//             color: ${isOn ? '#CCCCCC' : '#CB8400'};
//         '>

//     </div>`;

    
//     const modeSwitch = document.querySelector('.toggle-switch');
//     const theBody = document.querySelector('.the-body');

//     modeToggle.addEventListener('click', (e) => {

//         modeSwitch.classList.remove('bi-brightness-high-fill');

//         e.stopPropagation();

//         isOn = !isOn;
//         setDark(isOn);
        
//         modeSwitch.classList.toggle('slide', isOn);

//         theBody.classList.toggle('darkmode', isOn);


//         modeSwitch.classList.toggle('bi-moon-fill', isOn);
//         modeSwitch.classList.toggle('bi-brightness-high-fill', !isOn);

//         modeSwitch.style.color = `${isOn ? '#CCCCCC' : '#CB8400'}`

//     });

// }

// togglingTheme();