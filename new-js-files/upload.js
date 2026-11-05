const burger = document.querySelector('.burger');
const smNav = document.querySelector('.sm-nav');

burger.addEventListener("click", () => {

    burger.classList.toggle('hgi-menu-01')
    burger.classList.toggle('hgi-cancel-01')

    smNav.classList.toggle('show');
    console.log("Clicked!");

})