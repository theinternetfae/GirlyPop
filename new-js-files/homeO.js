import { products } from "./General files/productsO.js";
import { truncateText, randomGenerator, initializeNavBar } from "./General files/utilsO.js";
// import { updateCartCount, featuredProducts, updateCartShove } from "./General files/utilsO.js";


initializeNavBar();

//RENDERING SEARCH FINDINGS (home)
const params = new URLSearchParams(window.location.search);

const search = params.get("q");
const generalBody = document.querySelector(".general");
const specificBody = document.querySelector(".search");
const specificPick = document.querySelector(".ser-pick");

console.log("Search key:", search);

function findnFilter() {

    if(search === null) {

        return;

    } else {

        generalBody.classList.add('hidden');
        specificBody.classList.remove('hidden');
        specificPick.innerHTML = search;

        const searchFor = search;

        const matchingProducts = [];

        for (let i = 0; i < products.length; i++) {
            
            const element = products[i].keywords;
            const elementLowerCase = element.map(e => e.toLowerCase());

            elementLowerCase.forEach(e => {
                searchFor.toLowerCase().includes(e) && matchingProducts.push(products[i]); 
            })
        
        }

        const matchingProductsIds = matchingProducts.map(m => m.id);

        const filteredMatchingIds = new Set(matchingProductsIds);
        const filteredMatchingProducts = [];

        for (let i = 0; i < products.length; i++) {
            const element = products[i].id;

            filteredMatchingIds.forEach(id => {
                id === element && filteredMatchingProducts.push(products[i]);
            })
        }

        console.log("Filtered Matching Products:", filteredMatchingProducts);

        return filteredMatchingProducts;

    }
}

const searchGrid = document.querySelector(".search-grid");

function renderSearched() {

    const found = findnFilter();
    
    if(found) {

        const shuffledFound = found.sort(() => 0.5 - Math.random());

        shuffledFound.forEach(f => {

            searchGrid.innerHTML += `

                <div class="search-product">
                
                    <img src="${f.image}" alt="">

                    <div class="prod-summ-cont ser-detail-show" data-productId="${f.id}">
                        <div class="prod-summ">
                            <div>
                                <h4>${truncateText(f.name)}</h4>
                                <p>$${(f.priceCents / 100).toFixed(2)}</p>
                            </div>
                            <div class="bi-cart2 to-cart" data-productId="${f.id}"></div>       
                        </div>
                    </div>

                </div>
            
            `

        })

        if(found.length === 0) {

            searchGrid.classList.add('no-grid');
            searchGrid.innerHTML = `
                <img src="./images/girlypop-notfound.png" class="no-grid-img">
            `
        }

    } else {
        return;
    }
}

function renderSearchOpenDetail() {

    const searchDetail = document.querySelectorAll('.ser-detail-show');

    searchDetail.forEach(s => {

        s.addEventListener('click', () => {
            
            renderProductDetail(s);
            renderMld(s);
            renderMProduct();
        })

    })

}

function fullSearchLogic() {
    renderSearched();
    renderSearchOpenDetail();
}

fullSearchLogic();















// TOGGLE CATEGORY LOGIC

const categoryIndicator = document.querySelector(".category-indicator");
const categories = document.querySelector(".categories");
const indicatorStat = document.querySelector(".indicator-stat");

const defaultLayout = document.querySelector(".default");
const categoryLayout = document.querySelector(".category-pick");

categoryIndicator.addEventListener("click", () => {
    
    if (categoryTitle.innerHTML !== "Sort") {
        categoryTitle.innerHTML = "Sort";
        indicatorStat.classList.remove('bi-x');
        indicatorStat.classList.add('bi-arrow-right-short');
        
        defaultLayout.classList.remove('hidden');
        categoryLayout.classList.add('hidden');
    
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
const categoryName = document.querySelector(".cat-name");

category.forEach(c => {
    
    c.addEventListener('click', () => {
        categories.classList.toggle('show');
        categoryTitle.innerHTML = c.innerHTML;
        categoryName.innerHTML = c.innerHTML;
        indicatorStat.classList.remove('bi-arrow-left-short');
        indicatorStat.classList.add('bi-x'); 

        categoryLayout.classList.remove('hidden');
        defaultLayout.classList.add('hidden');
        getCategoryPick(c.innerHTML);
    })

})

const categoryGrid = document.querySelector(".category-grid");

function getCategoryPick(category) {

    categoryGrid.innerHTML = '';

    const trueCat = category.toLowerCase();

    const categoryProducts = products.filter(p => p.category.toLowerCase() === trueCat);
    const shuffledCategory = categoryProducts.sort(() => 0.5 - Math.random());

    shuffledCategory.forEach(cp => {

        categoryGrid.innerHTML += `
            <div class="category-product">
                    
                <img src="${cp.image}" alt="">
                
                <div class="prod-summ-cont cat-detail-show" data-productId="${cp.id}">
                    <div class="prod-summ">
                        <div>
                            <h4>${cp.name}</h4>
                            <p>$${(cp.priceCents / 100).toFixed(2)}</p>
                        </div>
                        <div class="bi-cart2 to-cart" data-productId="${cp.id}"></div>
                    </div>
                </div>
            
            </div>
        `

    })

    const cProduct = document.querySelectorAll(".cat-detail-show");

    cProduct.forEach(c => {

        c.addEventListener('click', () => {
            renderProductDetail(c);
            renderMld(c);
            renderMProduct();
        })

    })

    initializeAddToCart();
}









// FEATURED PRODUCTS LOGIC

const featureContainer = document.querySelector(".scroll-cont")
const extraFeatureCont = document.querySelector(".extra-scroll-cont"); 

function renderFeatured() {
    const elig = products.filter(p => p.rating.stars === 5);
    const featuredProducts = randomGenerator(elig);
    featuredProducts.forEach(f => {
        featureContainer.innerHTML += `<div class="f-product">
                <img src="${f.image}" alt="">

                <div class="prod-summ-cont detail-show" data-productId="${f.id}">
                
                    <div class="prod-summ">
                        <div>
                            <h4>${truncateText(f.name)}</h4>
                            <p>$${(f.priceCents / 100).toFixed(2)}</p>
                        </div>
                        <div class="bi-cart2 to-cart" data-productId="${f.id}"></div>
                    </div>
                
                </div>

            </div>
        `
    })

    featuredProducts.forEach(f => {
        extraFeatureCont.innerHTML += `<div class="f-product" aria-hidden="true">
            <img src="${f.image}" alt="">
            
            <div class="prod-summ-cont detail-show" data-productId="${f.id}">
                
                <div class="prod-summ">
                    <div>
                        <h4>${truncateText(f.name)}</h4>
                        <p>$${(f.priceCents / 100).toFixed(2)}</p>
                    </div>
                    <div class="bi-cart2 to-cart" data-productId="${f.id}"></div>
                </div>
            
            </div>
        
        </div>
        `
    })      

}

renderFeatured();










// FOR YOU PRODUCTS
function renderProducts() {
    const productsCont = document.querySelector(".grid-cont");

    products.forEach(p => {
        productsCont.innerHTML += `<div class="your-product" >
            <img src="${p.image}" alt="">
            
            <div class="prod-summ-cont detail-show" data-productId="${p.id}">
                <div class="prod-summ">
                    <div>
                        <h4>${truncateText(p.name)}</h4>
                        <p>$${(p.priceCents / 100).toFixed(2)}</p>
                    </div>
                    <div class="bi-cart2 to-cart" data-productId="${p.id}"></div>
                    </div>
                </div>
            </div>
            
        </div>
        `
    })
}

renderProducts()

















// HANDLING PRODUCT DETAILS

const productPage = document.querySelector('.product-page');
const productDetails = document.querySelector('.product-details');

function moreLikeThis(picked) {

    const moreProducts = document.querySelector(".more-products");

    const aesthetics = picked.aesthetic;

    const matchingProducts = [];

    for (let i = 0; i < aesthetics.length; i++) {
        const element = aesthetics[i];
        products.forEach(p => {
            p.aesthetic.includes(element) && matchingProducts.push(p);
        }) 
    }

    const ids = matchingProducts.map(m => m.id);
    const removedDuplicates = new Set(ids);
    const removedDuplicatesArrayy = [...removedDuplicates]

    const finalMatched = [];
    
    for (let i = 0; i < removedDuplicatesArrayy.length; i++) {
        const element = removedDuplicatesArrayy[i];
        products.forEach(p => {
            p.id === element && element !== picked.id && finalMatched.push(p);
        }) 
    }

    const randomMatched = randomGenerator(finalMatched);
    return randomMatched;
}

function renderProductDetail(product) {

    const prodIdentity = product.dataset.productid;
    const retrieveProduct = products.filter(p => p.id === prodIdentity);
    const p = retrieveProduct[0];

    productPage.classList.add('show');

    productDetails.innerHTML = `
        <i class="bi bi-x-lg exit-details"></i>
        <div class="details-box">
            
            <div class="about-product">
                
                <div class="details-img-box">
                    <img src="${p.image}" alt="">
                </div>

                <div class="initial-info">
                    
                    <div class="name-info">
                        <div>
                            <h3>${p.name}</h3>
                            <i class="bi bi-info-circle-fill info" style="color: ${p.status === "bad" ? "orange" : "green"}" title="${p.wrong || "Item is in perfect condition!"}"></i>
                        </div>
                        <p class="fault">Fault: ${p.wrong ? p.wrong : "None"}</p>
                    </div>

                    <p class="price">$${(p.priceCents / 100).toFixed(2)}</p>
                    
                    <div class="actions">

                        <button>
                            Chat vendor
                            <i class="bi bi-chat-right-dots-fill actions-bi"></i>
                        </button>

                        <p class="tmi">ThatGirlAnya</p>

                        <button>
                            View vendor
                            <i class="bi bi-eye-fill actions-bi"></i>
                        </button>

                    </div>

                    <button class="to-cart">
                        Add to bag
                        <i class="bi bi-bag actions-bi"></i>
                    </button>
                    
                    <div class="desc-box">
                        <span>Description:</span>
                        <p>This is a demo description for this. I'm only adding this for a test to see what actual descriptions will look like once a product is being displayed.</p>
                    </div>
                
                </div>
            </div>

            <div class="more">
                <h4>More like this</h4>
                
                <div class="more-products">
                
                    <div class="m-scroll-box">
                
                    </div>
                
                    <div class="m-scroll-box m-scroll-hidden" aria-hidden="true">
                
                
                    </div>
                </div>
                            
            </div>
            
        </div>
    `

    setTimeout(() => {
        productDetails.classList.add('slide-in');
    }, 0)


    const closeDetail = document.querySelector('.exit-details');

    closeDetail.addEventListener('click', () => {
        productDetails.classList.remove('slide-in');
        productPage.classList.remove('show');
    })

}


function renderMld (product) {

    const prodIdentity = product.dataset.productid;
    const retrieveProduct = products.filter(p => p.id === prodIdentity);
    const p = retrieveProduct[0];

    const more = moreLikeThis(p);
    const mScrollBox = document.querySelector(".m-scroll-box");
    const mScrollHidden = document.querySelector(".m-scroll-hidden");

    more.forEach(m => {
        mScrollBox.innerHTML += `
            <div class="m-product">

                <img src="${m.image}" alt="">
                
                <div class="m-summ-cont m-identify" data-productId="${m.id}">
                    <div class="m-summ">
                        <div>
                            <h4>${truncateText(m.name)}</h4>
                            <p>$${(m.priceCents / 100).toFixed(2)}</p>
                        </div>
                        <div class="bi-cart2 to-cart" data-productId="${m.id}"></div>
                    </div>
                </div>
                
            </div>
        `

        mScrollHidden.innerHTML += `
            <div class="m-product">
                <img src="${m.image}" alt="">

                <div class="m-summ-cont m-identify" data-productId="${m.id}">
                    <div class="m-summ">
                        <div>
                            <h4>${truncateText(m.name)}</h4>
                            <p>$${(m.priceCents / 100).toFixed(2)}</p>
                        </div>
                        <div class="bi-cart2 to-cart" data-productId="${m.id}"></div>
                    </div>
                </div>

            </div>
        `
    })
}

function renderMProduct() {

    const mProduct = document.querySelectorAll(".m-identify");

    mProduct.forEach(m => {

        m.addEventListener('click', () => {
            renderProductDetail(m);
            renderMld(m);
            renderMProduct();
        })

    })

    initializeAddToCart();
}

const openDetail = document.querySelectorAll('.detail-show');

openDetail.forEach(d => {

    d.addEventListener('click', () => {
        
        renderProductDetail(d);
        renderMld(d);
        renderMProduct();

    })

})


function initializeAddToCart() {

    const toCart = document.querySelectorAll('.to-cart');

    toCart.forEach(t => {
        t.addEventListener('click', (e) => {

            e.stopPropagation();
            const tId = t.dataset.productid;
            console.log(`Cart clciked!: ${tId}`);
            
        })
    })

}

initializeAddToCart();