const burger = document.querySelector('.burger');
const smNav = document.querySelector('.sm-nav');

burger.addEventListener("click", () => {

    burger.classList.toggle('hgi-menu-01')
    burger.classList.toggle('hgi-cancel-01')

    smNav.classList.toggle('show');

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

})



const categoryLocation = document.querySelector('.category-location');
const locationArrow = document.querySelector('.location-arrow')
const locationText = document.querySelector('.location-text');
const locationField = document.querySelector('.location');

categoryLocation.addEventListener("click", () => {

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

})




const categoryBank = document.querySelector('.category-bank');
const bankArrow = document.querySelector('.bank-arrow')
const bankText = document.querySelector('.bank-text');
const bankField = document.querySelector('.bank');

categoryBank.addEventListener("click", () => {

    if(bankArrow.classList.contains('hgi-arrow-up-01')) {
        
        bankArrow.classList.replace('hgi-arrow-up-01', 'hgi-arrow-down-01');
        bankArrow.style.color = '#7E1036';
        bankText.style.color = '#7E1036';
    
    } else {
        
        bankArrow.classList.replace('hgi-arrow-down-01', 'hgi-arrow-up-01');
        bankArrow.style.color = '#848685';
        bankText.style.color = '#848685';
        
    }

    bankField.classList.toggle('show');

})







const categoryContact = document.querySelector('.category-contact');
const contactArrow = document.querySelector('.contact-arrow')
const contactText = document.querySelector('.contact-text');
const contactField = document.querySelector('.contact');

categoryContact.addEventListener("click", () => {

    if(contactArrow.classList.contains('hgi-arrow-up-01')) {
        
        contactArrow.classList.replace('hgi-arrow-up-01', 'hgi-arrow-down-01');
        contactArrow.style.color = '#7E1036';
        contactText.style.color = '#7E1036';
    
    } else {
        
        contactArrow.classList.replace('hgi-arrow-down-01', 'hgi-arrow-up-01');
        contactArrow.style.color = '#848685';
        contactText.style.color = '#848685';
        
    }

    contactField.classList.toggle('show');

})