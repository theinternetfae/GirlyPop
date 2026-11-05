const burger = document.querySelector('.burger');
const smNav = document.querySelector('.sm-nav');

burger.addEventListener("click", () => {

    burger.classList.toggle('hgi-menu-01')
    burger.classList.toggle('hgi-cancel-01')

    smNav.classList.toggle('show');
    console.log("Clicked!");

})




const categoryPersonal = document.querySelector('.category-personal');
const personalArrow = document.querySelector('.personal-arrow')
const personalText = document.querySelector('.personal-text');
const personalField = document.querySelector('.personal-info');

categoryPersonal.addEventListener("click", () => {

    if(personalArrow.classList.contains('hgi-arrow-up-01')) {
        
        personalArrow.classList.replace('hgi-arrow-up-01', 'hgi-arrow-down-01');
        personalArrow.style.color = '#7E1036';
        personalText.style.color = '#7E1036';
    
    } else {
        
        personalArrow.classList.replace('hgi-arrow-down-01', 'hgi-arrow-up-01');
        personalArrow.style.color = '#848685';
        personalText.style.color = '#848685';
        
    }

    personalField.classList.toggle('show');

    console.log("Clicked!");

})






const categoryBio = document.querySelector('.category-bio');
const bioArrow = document.querySelector('.bio-arrow')
const bioText = document.querySelector('.bio-text');
const bioField = document.querySelector('.bio');

categoryBio.addEventListener("click", () => {

    if(bioArrow.classList.contains('hgi-arrow-up-01')) {
        
        bioArrow.classList.replace('hgi-arrow-up-01', 'hgi-arrow-down-01');
        bioArrow.style.color = '#7E1036';
        bioText.style.color = '#7E1036';
    
    } else {
        
        bioArrow.classList.replace('hgi-arrow-down-01', 'hgi-arrow-up-01');
        bioArrow.style.color = '#848685';
        bioText.style.color = '#848685';
        
    }

    bioField.classList.toggle('show');

    console.log("Clicked!");

})



const categorylocation = document.querySelector('.category-location');
const locationArrow = document.querySelector('.location-arrow')
const locationText = document.querySelector('.location-text');
const locationField = document.querySelector('.location');

categorylocation.addEventListener("click", () => {

    if(locationArrow.classList.contains('hgi-arrow-up-01')) {
        
        locationArrow.classList.replace('hgi-arrow-up-01', 'hgi-arrow-down-01');
        locationArrow.style.color = '#7E1036';
        locationText.style.color = '#7E1036';
    
    } else {
        
        locationArrow.classList.replace('hgi-arrow-down-01', 'hgi-arrow-up-01');
        locationArrow.style.color = '#848685';
        locationText.style.color = '#848685';
        
    }

    locationField.classList.toggle('show');

    console.log("Clicked!");

})