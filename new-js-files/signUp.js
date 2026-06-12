const submit = document.querySelector('.submit');


//ALERT 
document.addEventListener('click', (e) => {

    const soon = e.target.closest(".soon");

    if (!soon) return;

    e.preventDefault();
    const alert = document.querySelector(".alert-cont");
    const exit = document.querySelector(".exit-alert");

    if(alert.classList.contains('out')) {
        return;
    } else {
        alert.classList.add('out');
        automaticClear(alert);
    }

    exit.addEventListener("click", () => {
        console.log("Exit clicked");
        alert.classList.remove('out');
    })

})


function automaticClear(alert) {

    if(alert.classList.contains('out')) {
        const timer = setTimeout(() => {
            alert.classList.remove('out');
        }, 5000)
    
        return () => clearTimeout(timer);
    }

}