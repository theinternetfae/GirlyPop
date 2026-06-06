import { setTheme } from "./General files/utilsO.js";

setTheme();

const burger = document.querySelector(".burger");
const navsSm = document.querySelector(".navs-sm");

burger.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Burger clicked!");
    navsSm.classList.toggle('show');

    const removeBurger = document.querySelector(".remove-burger");

    removeBurger.addEventListener("click", (e) => {
        e.preventDefault();
        navsSm.classList.remove('show');
    })
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
            if(navsSm.classList.contains('show')){
                navsSm.classList.remove('show');
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
