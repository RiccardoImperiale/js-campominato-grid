const gameBoard = document.querySelector('.game_board');
const difficultyLevels = document.querySelector('#difficulty');
const gameEndCard = document.querySelector('.end_game');
const scoreText = document.querySelector('#final_score');
let score = 0;
let level;
let squaresNumb;

// start game
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    level = difficultyLevels.value;
    generateSquares();
    squareClick();
})

// restart
document.querySelector('#restart_btn').addEventListener('click', () => {
    gameEndCard.style.display = 'none';
    score = 0;
    generateSquares();
    squareClick();
})

function squareClick() {
    // generate mushrooms
    const mushrooms = generateMushrooms(squaresNumb);
    // click on each square check if there is a mushroom 
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.addEventListener('click', () => {
            if (mushrooms.includes(Number(square.innerText))) {
                square.innerText = '🍄';
                square.classList.add('square_red');
                endGame(squaresNumb);
            } else {
                square.classList.contains('square_dark') ? score-- : score++
                if (score === squaresNumb) {
                    winGame();
                }
                square.classList.toggle('square_dark');
            }
            console.log(score);
        })
    }
}

function endGame(numb) {
    scoreText.innerText = `Final score: ${score} / ${numb}`
    gameEndCard.style.display = 'flex';
}

function winGame() {
    scoreText.innerText = 'You win!'
    gameEndCard.style.display = 'flex';
}

function generateSquares() {
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
        generateCells(i);
    }
}

function generateCells(numb) {
    const squareMarkup = `<div class="square">${numb}</div>`;
    gameBoard.style.border = '2px solid var(--cm-primary-darker)';
    gameBoard.insertAdjacentHTML('beforeend', squareMarkup);
}

function generateMushrooms(num) {
    let mushroomsArr = [];
    while (mushroomsArr.length < 16) {
        const randNumb = getRndNumber(1, num);
        if (!mushroomsArr.includes(randNumb)) {
            mushroomsArr.push(randNumb);
        }
    }
    return mushroomsArr;
}

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}