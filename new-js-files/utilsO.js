export function updateCartCount() {
    const addBtn = document.querySelectorAll('.cart-track');
    let cartCount = 0;
    const cartCountText = document.querySelector('.cart-count p');
    
    addBtn.forEach(btn => {

        btn.addEventListener('click', () => {  

            if (btn.classList.contains('bi-cart2')) {
                btn.classList.remove('bi-cart2');
                btn.classList.add('bi-cart-check');
                cartCount++;
                cartCountText.innerHTML = cartCount;
            } else if (btn.classList.contains('bi-cart-check')) {
                btn.classList.remove('bi-cart-check');
                btn.classList.add('bi-cart2');
                cartCount--;
                cartCountText.innerHTML = cartCount;
            }

        })
    });
}

