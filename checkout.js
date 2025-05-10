const moves = document.querySelectorAll('.moves');

moves.forEach((move) => {

    move.addEventListener('click', () => {
        
        moves.forEach((m) => m.classList.remove('bi-filled'));

        move.classList.add('bi-filled');
  
    })
})

