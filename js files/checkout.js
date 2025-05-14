export function updateCart() {
    const cart = document.querySelectorAll('.cart-track');
    const cartCount = document.querySelector('.cart-count p');
    let cartCounting = 0;

    cart.forEach((cartBtn) => {
        cartBtn.addEventListener('click', () => {
            if(cartBtn.classList.contains('bi-cart2')){
                cartBtn.classList.remove('bi-cart2');
                cartBtn.classList.add('bi-cart-check');
                cartCounting++;
                cartCount.innerHTML = cartCounting;    
            } else if(cartBtn.classList.contains('bi-cart-check')) {
                cartBtn.classList.remove('bi-cart-check');
                cartBtn.classList.add('bi-cart2');
                cartCounting--;
                cartCount.innerHTML = cartCounting;
            }

            console.log('clicked');
        })
    })
}

const moves = document.querySelectorAll('.moves');
const white = document.querySelector('.cart-count p')

moves.forEach((move) => {

    move.addEventListener('click', () => {
        
        moves.forEach((m) => m.classList.remove('bi-filled'));

        move.classList.add('bi-filled');

        if(move.classList.contains('no')) {
            white.style.color = '#7e1036ee';
        }
  
    })
})

const productPage = document.querySelector('.product-page');
const products = document.querySelectorAll('.for-you-product img');
const back = document.querySelector('.bi-x-lg');

products.forEach((product) => {
    product.addEventListener('click', () => {
    productPage.style.display = 'block';
    })
})

back.addEventListener('click', () => {
    productPage.style.display = 'none';
})

