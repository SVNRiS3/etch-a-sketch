const GRID_SIZE = 5;

const gridContainer = document.querySelector('.grid-container');



function createSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function createRow() {
    let row = document.createElement('row');
    row.classList.add('row');
    for (let i = 0; i < GRID_SIZE; i++) {
        row.appendChild(createSquare());
    }
    return row;
}

function gridConstructor() {
    for (let i = 0; i < GRID_SIZE; i++) {
        gridContainer.appendChild(createRow());
    }
}

function setupSquares() {
    const squares = document.querySelectorAll('.square');
    let squareSize = 960 / GRID_SIZE;
    squares.forEach((square) => {
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('square--active');
        })
    })
}

function runApp() {
    gridConstructor();
    setupSquares();
}

runApp();