const gameBoard = document.querySelector('.game_board');
const startBtn = document.querySelector('button');
const difficultyLevels = document.querySelector('#difficulty');

startBtn.addEventListener('click', () => {
    // generate the squares by difficulty level
    generateSquares(difficultyLevels.value);
    // change square color 
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

function generateSquares(level) {
    let squaresNumb;
    let boardWidth = '';
    if (level == 1) {
        squaresNumb = 100
        boardWidth = 'calc(800px + 4px)'
    }
    if (level == 2) {
        squaresNumb = 81
        boardWidth = 'calc(80px * 9 + 4px)'
    }
    if (level == 3) {
        squaresNumb = 49
        boardWidth = 'calc(80px * 7 + 4px)'
    }

    gameBoard.innerHTML = '';
    gameBoard.style.setProperty('width', boardWidth);
    // generate cells 
    for (let i = 1; i <= squaresNumb; i++) {
        addCells(i);
    }
}

function addCells(i) {
    const squareMarkup = `<div class="square">${i}</div>`;
    gameBoard.style.border = '2px solid var(--cm-primary-darker)'
    gameBoard.insertAdjacentHTML('beforeend', squareMarkup)
}