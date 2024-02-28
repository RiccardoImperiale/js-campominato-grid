const gameBoard = document.querySelector('.game_board');
const startBtn = document.querySelector('button');
const difficultyLevels = document.querySelector('#difficulty');

startBtn.addEventListener('click', () => {
    if (difficultyLevels.value == 1) {
        gameBoard.innerHTML = '';
        gameBoard.style.setProperty('width', 'calc(800px + 4px)');
        // generate a square grid  
        for (let i = 1; i <= 100; i++) {
            addCells(i);
        }
    }

    if (difficultyLevels.value == 2) {
        gameBoard.innerHTML = '';
        gameBoard.style.setProperty('width', 'calc(80px * 9 + 4px)');
        // generate a square grid  
        for (let i = 1; i <= 81; i++) {
            addCells(i);
        }
    }

    if (difficultyLevels.value == 3) {
        gameBoard.innerHTML = '';
        gameBoard.style.setProperty('width', 'calc(80px * 7 + 4px)');
        // generate a square grid  
        for (let i = 1; i <= 49; i++) {
            addCells(i);
        }
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

function addCells(i) {
    // each cell has a progressive number, from 1 to 100
    const squareMarkup = `<div class="square">${i}</div>`;
    gameBoard.style.border = '2px solid var(--cm-primary-darker)'
    gameBoard.insertAdjacentHTML('beforeend', squareMarkup)
}