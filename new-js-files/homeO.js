import { products } from "./General files/productsO.js";
import { truncateText } from "./General files/utilsO.js";
// import { updateCartCount, featuredProducts, updateCartShove } from "./General files/utilsO.js";


// TOGGLE CATEGORY LOGIC
const burger = document.querySelector(".burger");
const navsSm = document.querySelector(".navs-sm");

burger.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Burger clicked!");
    navsSm.classList.toggle('show');
})

const categoryIndicator = document.querySelector(".category-indicator");
const categories = document.querySelector(".categories");
const indicatorStat = document.querySelector(".indicator-stat");

categoryIndicator.addEventListener("click", () => {
    
    if (categoryTitle.innerHTML !== "Sort") {
        categoryTitle.innerHTML = "Sort";
        indicatorStat.classList.remove('bi-x');
        indicatorStat.classList.add('bi-arrow-right-short');
    } else {
        categories.classList.toggle('show');
        if (indicatorStat.classList.contains('bi-arrow-right-short')) {
            indicatorStat.classList.remove('bi-arrow-right-short');
            indicatorStat.classList.add('bi-arrow-left-short');
        } else {
            indicatorStat.classList.remove('bi-arrow-left-short');
            indicatorStat.classList.add('bi-arrow-right-short');    
        }
    }

})


const category = document.querySelectorAll(".category");
const categoryTitle = document.querySelector(".category-title");

category.forEach(c => {
    
    c.addEventListener('click', () => {
        categories.classList.toggle('show');
        categoryTitle.innerHTML = c.innerHTML;
        indicatorStat.classList.remove('bi-arrow-left-short');
        indicatorStat.classList.add('bi-x'); 
    })

})



// FEATURED PRODUCTS LOGIC

function featuredGenerator() {
    const eligible = products.filter(p => p.rating.stars === 5);
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    console.log(shuffled.slice(0, 5));
    return shuffled.slice(0, 5);
}

const featureContainer = document.querySelector(".scroll-cont")
const extraFeatureCont = document.querySelector(".extra-scroll-cont"); 

function renderFeatured() {
    const featuredProducts = featuredGenerator();
    featuredProducts.forEach(f => {
        featureContainer.innerHTML += `<div class="f-product" data-product-id="${f.id}">
                <img src="${f.image}" alt="">
                <div class="prod-summ">
                    <div>
                        <h4>${truncateText(f.name)}</h4>
                        <p>$${(f.priceCents / 100).toFixed(2)}</p>
                    </div>
                    <div class="bi-cart2"></div>
                </div>
            </div>
        `
    })

    featuredProducts.forEach(f => {
        extraFeatureCont.innerHTML += `<div class="f-product" data-product-id="${f.id}">
            <img src="${f.image}" alt="">
            <div class="prod-summ">
                <div>
                    <h4>${truncateText(f.name)}</h4>
                    <p>$${(f.priceCents / 100).toFixed(2)}</p>
                </div>
                <div class="bi-cart2"></div>
            </div>
        </div>
        `
    })      

}

renderFeatured();



















// featuredProducts();

// const forYou = document.querySelector('.for-you-products');

// products.forEach((product) => {
//     forYou.innerHTML += `<div class="for-you-product">
//                 <div class="description-for-you">
//                     <div class="pop-up">
//                         <h4>${product.name}</h4>
//                         <p>$${(product.priceCents / 100).toFixed(2)}</p>    
//                     </div>
//                     <button class="bi-cart2 cart-track" data-product-id="${product.id}"></button>
//                 </div>
//                 <img src="${product.image}" alt="" class="products">
//             </div>`;
// });

// updateCartCount();

// const popUpPage = document.querySelector('.product-page');
// const popUpDetails = document.querySelector('.product-details');
// const popUp = document.querySelectorAll('.pop-up');

// popUp.forEach((pop, index) => {
//     pop.addEventListener('click', () => {

//         const product = products[index];

//         popUpPage.style.display = 'block';
//         popUpDetails.innerHTML = `<i class="bi bi-x-lg"></i>
//                 <div class="showing-details">
//                 <div class="img-box">
//                     <img src="${product.image}" alt="">
//                 </div>
//                 <div class="product-details-box">
//                     <div class="details-intro">
//                         <h1>${product.name}</h1>
//                         <h2>$${(product.priceCents / 100).toFixed(2)}</h2>
//                     </div>

//                     <div class="popup-desc">
//                         <span>Description:</span>
//                         <p>I thrifted this dress a while ago for myself, but forgot that the body doesn't come with the dress lol... Anyways, It's up for sale now! It's in perfect condition, I only tried it on a few times, the price is NON-NEGOTIOABLE. I'm sorry but I got it for a pretty penny too so this is the lowest I can go on this.</p>
//                     </div>

//                     <button class="shoving shove shoved" data-product-id="${product.id}">Shove in bag</button>

//                     <div class="buyer-info">
//                         <p>~ ThatGirlRae</p>
//                         <div>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                         </div>
//                         <span>(113 reviews)</span>
//                         <button><i class="bi bi-chat-text"></i>Chat</button>
//                     </div>

//                     <p class="location"><i class="bi bi-geo-alt"></i>California, LA</p>       

//                     <h4>Reviews on ThatGirlRae</h4>
//                     <section class="testimonials">
//                         <div class="testimonial-block">
//                             <p>"The vendor was so nice. Also, it was refreshing to actually get what I ordered in the mail."</p>
//                             <h5>~ SoFeminine</h5>
//                             <div class="rating">
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                             </div>
//                         </div>
//                         <div class="testimonial-block">
//                             <p>"She's pretty strict on prices but I promise you, the things she sells are always top tier quality."</p>
//                             <h5>~ ChillGirl</h5>
//                             <div class="rating">
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                             </div>
//                         </div>
//                         <div class="testimonial-block">
//                             <p>"Amazing, I got what I wanted, plus she always has cute stuff."</p>
//                             <h5>~ Ammy B.</h5>
//                             <div class="rating">
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>`;
    
//             const back = document.querySelector('.bi-x-lg');
    
//             back.addEventListener('click', () => {
//                 popUpPage.style.display = 'none';
//             });

//             updateCartShove();

//     })
// });


// const featuredPop = document.querySelectorAll('.description-text h4');
// const featuredArray = [];

// featuredPop.forEach((pop, index) => {
//     const theItem = pop.dataset.productId;
//     products.forEach((product) => {
//         if (theItem === product.id) {
//             featuredArray.push(product);
//         }
//     })

//     pop.addEventListener('click', () => {
//         const featuredIndex = featuredArray[index];
  
//         popUpPage.style.display = 'block';
//         popUpDetails.innerHTML = `<i class="bi bi-x-lg"></i>
//                 <div class="showing-details">
//                 <div class="img-box">
//                     <img src="${featuredIndex.image}" alt="">
//                 </div>
//                 <div class="product-details-box">
//                     <div class="details-intro">
//                         <h1>${featuredIndex.name}</h1>
//                         <h2>$${(featuredIndex.priceCents / 100).toFixed(2)}</h2>
//                     </div>

//                     <div class="popup-desc">
//                         <span>Description:</span>
//                         <p>I thrifted this dress a while ago for myself, but forgot that the body doesn't come with the dress lol... Anyways, It's up for sale now! It's in perfect condition, I only tried it on a few times, the price is NON-NEGOTIOABLE. I'm sorry but I got it for a pretty penny too so this is the lowest I can go on this.</p>
//                     </div>

//                     <button class="shoving shove shoved" data-product-id="${featuredIndex.id}">Shove in bag</button>

//                     <div class="buyer-info">
//                         <p>~ ThatGirlRae</p>
//                         <div>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                             <i class="bi bi-star-fill"></i>
//                         </div>
//                         <span>(113 reviews)</span>
//                         <button><i class="bi bi-chat-text"></i>Chat</button>
//                     </div>

//                     <p class="location"><i class="bi bi-geo-alt"></i>California, LA</p>       

//                     <h4>Reviews on ThatGirlRae</h4>
//                     <section class="testimonials">
//                         <div class="testimonial-block">
//                             <p>"The vendor was so nice. Also, it was refreshing to actually get what I ordered in the mail."</p>
//                             <h5>~ SoFeminine</h5>
//                             <div class="rating">
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                             </div>
//                         </div>
//                         <div class="testimonial-block">
//                             <p>"She's pretty strict on prices but I promise you, the things she sells are always top tier quality."</p>
//                             <h5>~ ChillGirl</h5>
//                             <div class="rating">
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                             </div>
//                         </div>
//                         <div class="testimonial-block">
//                             <p>"Amazing, I got what I wanted, plus she always has cute stuff."</p>
//                             <h5>~ Ammy B.</h5>
//                             <div class="rating">
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                                 <i class="bi bi-star-fill"></i>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>`;
    
//             const back = document.querySelector('.bi-x-lg');
    
//             back.addEventListener('click', () => {
//                 popUpPage.style.display = 'none';
//             });

//             updateCartShove();
        
//     })

// });