const burger = document.querySelector('.burger');
const smNav = document.querySelector('.sm-nav');

burger.addEventListener("click", () => {

    burger.classList.toggle('hgi-menu-01');
    burger.classList.toggle('hgi-cancel-01');

    smNav.classList.toggle('show');
    console.log("Clicked!");

})








// import { getDark, setDark } from "./General files/storageO.js";
// import { initializeNavBar, setTheme } from "./General files/utilsO.js";

// setTheme();
// initializeNavBar();

// function togglingTheme() {

//     let isOn = getDark();
//     const modeToggle = document.querySelector('.mode-toggle');

//     modeToggle.innerHTML = `<div class="toggle-switch 
//         ${isOn ? 'bi-moon-fill' : 'bi bi-brightness-high-fill'} 
//         ${isOn ? 'slide' : ''}"
        
//         style='
//             color: ${isOn ? '#CCCCCC' : '#CB8400'};
//         '>

//     </div>`;

    
//     const modeSwitch = document.querySelector('.toggle-switch');
//     const theBody = document.querySelector('.the-body');

//     modeToggle.addEventListener('click', (e) => {

//         modeSwitch.classList.remove('bi-brightness-high-fill');

//         e.stopPropagation();

//         isOn = !isOn;
//         setDark(isOn);
        
//         modeSwitch.classList.toggle('slide', isOn);

//         theBody.classList.toggle('darkmode', isOn);


//         modeSwitch.classList.toggle('bi-moon-fill', isOn);
//         modeSwitch.classList.toggle('bi-brightness-high-fill', !isOn);

//         modeSwitch.style.color = `${isOn ? '#CCCCCC' : '#CB8400'}`

//     });

// }

// togglingTheme();