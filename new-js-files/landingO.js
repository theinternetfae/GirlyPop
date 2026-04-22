// import { updateCartCount, featuredProducts } from "./General files/utilsO.js";

// featuredProducts();
// updateCartCount();

const burger = document.querySelector(".burger");
const smallNavs = document.querySelector(".small-nav-cont");

burger.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Burger clicked!");
    smallNavs.classList.toggle('show');
})




const soon = document.querySelectorAll(".soon");
const alert = document.querySelector(".alert-cont");
const exit = document.querySelector(".exit-alert");

soon.forEach(s => {
    s.addEventListener("click", (e) => {
        e.preventDefault();
        if(alert.classList.contains('out')) {
            return;
        } else {
            if(smallNavs.classList.contains('show')){
                smallNavs.classList.remove('show');
            }
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
