const gameBoard = document.querySelector('.game_board');
const startBtn = document.querySelector('button');

startBtn.addEventListener('click', () => {
    // generate a square grid  
    for (let i = 1; i <= 100; i++) {
        // each cell has a progressive number, from 1 to 100
        const squareMarkup = `<div class="square">${i}</div>`;
        gameBoard.style.border = '2px solid var(--cm-primary-darker)'
        gameBoard.insertAdjacentHTML('beforeend', squareMarkup)
    }

    // for each cell on click change color
    colorSquare();
})

function colorSquare() {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.addEventListener('click', () => {
            square.classList.toggle('square_dark');
            console.log(square.innerText);
        })
    }
}