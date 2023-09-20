let gridSize = 50;
console.log(typeof gridSize);
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
            // e.target.classList.add('square--active');
            e.target.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        })
    })
}

function createNewBoard() {
    do gridSize = +prompt("Number of squares in a row: ", "16");
    while ((gridSize > 100 || gridSize < 1) || isNaN(gridSize))
    gridContainer.innerHTML = '';
    runApp();
}

function runApp() {
    gridConstructor();
    setupSquares();
}

createBoardButton.addEventListener('click', () => { createNewBoard() })
runApp();