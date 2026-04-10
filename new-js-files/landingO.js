import { updateCartCount, featuredProducts } from "./General files/utilsO.js";

// featuredProducts();
// updateCartCount();

const soon = document.querySelectorAll(".soon");

soon.forEach(s => {
    s.addEventListener("click", () => {
        console.log("Clicked!")
    })
})