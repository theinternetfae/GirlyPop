export function getCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    return cart;
}

export function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function getUser() {
    let user = JSON.parse(localStorage.getItem('user')) || {
        id: "2c535d1a-11ad-4747-af63-e75b0d6c9947",
        fullName: 'Reyna Cole',
        username: "reynacole",
        about: "I'm just a girl, selling on an online store, waiting... to be rich.",
        pfp: "images/medium-shot-friends-having-fun-party.jpg",
        banner: "images/two-pair-heart-shaped-sunglasses.jpg",
        defaultUser: true,
        location: 'Port-Harcourt'
    };

    return user;
}

export function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}




// export function getDark() {
//     const isOn = JSON.parse(localStorage.getItem('isOn')) || false;

//     return isOn;
// }

// export function setDark(condition) {
//     localStorage.setItem('isOn', JSON.stringify(condition));
// }


// export function getLocation() {
//     const location = JSON.parse(localStorage.getItem('location')) || {
//         country: '',
        
//         state: {
//             isoCode: '',
//             name: ''
//         },
        
//         city: ''
//     };

//     return location;
// }

// export function setLocation(condition) {
//     localStorage.setItem('location', JSON.stringify(condition));
// }