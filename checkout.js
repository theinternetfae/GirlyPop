const moves = document.querySelectorAll('.moves');

moves.forEach((move) => {

    move.addEventListener('click', () => {
        
        moves.forEach((m) => m.classList.remove('bi-filled'));

        move.classList.add('bi-filled');
  
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

