import { initializeNavBar } from "./General files/utilsO.js";

initializeNavBar();
const modeToggle = document.querySelector('.mode-toggle');
const modeSwitch = document.querySelector('.toggle-switch');
const theBody = document.querySelector('.the-body');

modeToggle.addEventListener('click', (e) => {

    modeSwitch.classList.remove('bi-brightness-high-fill');

    e.stopPropagation();

    console.log('Mode toggled!');
    modeSwitch.classList.toggle('slide');

    const isOn = modeSwitch.classList.contains('slide');

    theBody.classList.toggle('darkmode', isOn);
    
    modeSwitch.classList.toggle('bi-moon-fill', isOn);
    modeSwitch.classList.toggle('bi-brightness-high-fill', !isOn);

    modeSwitch.style.color = `${isOn ? 'grey' : '#CB8400'}`

});

