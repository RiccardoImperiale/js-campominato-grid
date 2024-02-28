const gameBoard = document.querySelector('.game_board');
const startBtn = document.querySelector('button');

// click on a button and generate a square grid  
// each cell has a progressive number, from 1 to 100
startBtn.addEventListener('click', () => {
    for (let i = 1; i <= 100; i++) {
        const squareMarkup = `<div class="square">${i}</div>`;
        gameBoard.style.border = '2px solid var(--cm-primary-darker)'
        gameBoard.insertAdjacentHTML('beforeend', squareMarkup)
    }

    const squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', (e) => {
            e.target.classList.toggle('bg_lightblue')
        })
    }

})