import { updateCartCount, featuredProducts } from "./General files/utilsO.js";

// featuredProducts();
// updateCartCount();

const soon = document.querySelectorAll(".soon");
const alert = document.querySelector(".alert-cont");
const exit = document.querySelector(".exit-alert");

soon.forEach(s => {
    s.addEventListener("click", (e) => {
        e.preventDefault();
        if(alert.classList.contains('out')) {
            return;
        } else {
            alert.classList.add('out');
            automaticClear();
        }
    })
})

exit.addEventListener("click", () => {
    console.log("Exit clicked");
    alert.classList.remove('out');
})

function automaticClear() {

    if(alert.classList.contains('out')) {
        const timer = setTimeout(() => {
            alert.classList.remove('out');
        }, 8000)
    
        return () => clearTimeout(timer);
    }
}

