let gridSize = 50;

const gridContainer = document.querySelector('.grid-container');
const createBoardButton = document.querySelector('.create-board-button')



function createSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function createRow() {
    let row = document.createElement('row');
    row.classList.add('row');
    for (let i = 0; i < gridSize; i++) {
        row.appendChild(createSquare());
    }
    return row;
}

function gridConstructor() {
    for (let i = 0; i < gridSize; i++) {
        gridContainer.appendChild(createRow());
    }
}

function setupSquares() {
    const squares = document.querySelectorAll('.square');
    let squareSize = 960 / gridSize;
    squares.forEach((square) => {
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('square--active');
        })
    })
}

function createNewBoard() {
    gridSize = prompt("Number of squares in a row: ", "16");
    gridContainer.innerHTML = '';
    runApp();
}

function runApp() {
    gridConstructor();
    setupSquares();
}

createBoardButton.addEventListener('click', () => { createNewBoard() })
runApp();