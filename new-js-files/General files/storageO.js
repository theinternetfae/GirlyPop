export function getCart() {
    let inCart = JSON.parse(localStorage.getItem('inCart')) || [];

    return inCart;
}

export function setCart(newCart) {
    localStorage.setItem('inCart', JSON.stringify(newCart));
}





export function getDark() {
    const isOn = JSON.parse(localStorage.getItem('isOn')) || false;

    return isOn;
}

export function setDark(condition) {
    localStorage.setItem('isOn', JSON.stringify(condition));
}


export function getLocation() {
    const location = JSON.parse(localStorage.getItem('location')) || {
        country: '',
        
        state: {
            isoCode: '',
            name: ''
        },
        
        city: ''
    };

    return location;
}

export function setLocation(condition) {
    localStorage.setItem('location', JSON.stringify(condition));
}