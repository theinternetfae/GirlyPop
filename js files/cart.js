export const cartStorage = JSON.parse(localStorage.getItem('cartStorage')) || [ ];

export function saveToStorage() {
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
};

export function addToCart(productId) {
    cartStorage.push({
        productId       
    })

    saveToStorage();
}


            // const { productId } = cartBtn.dataset;

                // addToCart(productId);


                // cartStorage.forEach((item) => {
                //     theCart += `<div class="cart-item">

                //         <i class="bi bi-x-lg"></i>

                //         <div class="product">
                //             <img src="${item.image}" alt="">
                //             <div class="product-info">
                //                 <h3>${item.name}</h3>
                //                 <p>Status: Damaged</p>
                //                 <p>Size: Medium</p>
                //                 <p>Location: Austen, Texas</p>
                //             </div>
                //         </div>

                //         <div class="others">
                //             <p class="price">$${(item.priceCents / 100).toFixed(2)}</p>
                //             <p class="delivery">$5.40</p>
                //             <p class="total">$25.90</p>
                //         </div>
        
                //     </div>`
                // })

