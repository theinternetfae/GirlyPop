import { updateCart, navToggle } from "./checkout.js";
import { products } from "./products.js";

navToggle();

const forYou = document.querySelector('.for-you-products');

products.forEach(product => {
    forYou.innerHTML += `
        <div class="for-you-product">
            <div class="description-for-you">
                <div class="pop-up">
                    <h4>${product.name}</h4>
                    <p>$${(product.priceCents / 100).toFixed(2)}</p>    
                </div>
                <i class="bi bi-cart2 cart-track"></i>
            </div>
            <img src="${product.image}" alt="" class="products">
        </div>`;
});

popUpScreen();

const productPage = document.querySelector('.product-page');
const popUp = document.querySelector('.product-details');

function popUpScreen() {
    const productsPopUps = document.querySelectorAll('.pop-up'); 

    productsPopUps.forEach((productPopUp, index) => {
        productPopUp.addEventListener('click', () => {

            const product = products[index]; 

            productPage.style.display = 'block';
            popUp.innerHTML = `<i class="bi bi-x-lg"></i>
                <div class="showing-details">
                <div class="img-box">
                    <img src="${product.image}" alt="">
                </div>
                <div class="product-details-box">
                    <div class="details-intro">
                        <h1>${product.name}</h1>
                        <h2>$${(product.priceCents / 100).toFixed(2)}</h2>
                    </div>

                    <div class="popup-desc">
                        <span>Description:</span>
                        <p>I thrifted this dress a while ago for myself, but forgot that the body doesn't come with the dress lol... Anyways, It's up for sale now! It's in perfect condition, I only tried it on a few times, the price is NON-NEGOTIOABLE. I'm sorry but I got it for a pretty penny too so this is the lowest I can go on this.</p>
                    </div>

                    <button><i class="bi bi-bag"></i>Shove in bag</button>

                    <div class="buyer-info">
                        <p>~ ThatGirlRae</p>
                        <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <span>(113 reviews)</span>
                        <button><i class="bi bi-chat-text"></i>Chat</button>
                    </div>

                    <p class="location"><i class="bi bi-geo-alt"></i>California, LA</p>       

                    <h4>Reviews on ThatGirlRae</h4>
                    <section class="testimonials">
                        <div class="testimonial-block">
                            <p>"The vendor was so nice. Also, it was refreshing to actually get what I ordered in the mail."</p>
                            <h5>~ SoFeminine</h5>
                            <div class="rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                        <div class="testimonial-block">
                            <p>"She's pretty strict on prices but I promise you, the things she sells are always top tier quality."</p>
                            <h5>~ ChillGirl</h5>
                            <div class="rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                        <div class="testimonial-block">
                            <p>"Amazing, I got what I wanted, plus she always has cute stuff."</p>
                            <h5>~ Ammy B.</h5>
                            <div class="rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </section>
                </div>
            </div>`;

        const back = document.querySelector('.bi-x-lg');

        back.addEventListener('click', () => {
        productPage.style.display = 'none';
        });
        });
    });
}

updateCart();