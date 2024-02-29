const gameEndCard = document.querySelector('.end_game');
const scoreText = document.querySelector('#final_score');
let score = 0;
let level, squaresNumb;

// start game
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    level = document.querySelector('#difficulty').value;
    score = 0;
    generateSquares();
})

// restart
document.querySelector('#restart_btn').addEventListener('click', () => {
    gameEndCard.style.display = 'none';
    score = 0;
    generateSquares();
})

function squareClick(square) {
    // generate mushrooms
    const mushrooms = generateMushrooms(squaresNumb);
    // click on each square check if there is a mushroom 
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
        console.log(square.innerText, score);
    })
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
    const gameBoard = document.querySelector('.game_board');
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
    gameBoard.style.border = '2px solid var(--cm-primary-darker)';
    // generate cells 
    for (let i = 1; i <= squaresNumb; i++) {
        let square = generateCell(i);
        squareClick(square)
        gameBoard.insertAdjacentElement('beforeend', square);
    }
}

function generateCell(numb) {
    const squareCell = document.createElement('div')
    squareCell.classList.add('square')
    squareCell.innerText = numb;
    return squareCell;
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