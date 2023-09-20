const GRID_SIZE = 16;

const gridContainer = document.querySelector('.grid-container');


function createSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function createRow(gridSize) {
    let row = document.createElement('row');
    row.classList.add('row');
    for (let i = 0; i < gridSize; i++) {
        row.appendChild(createSquare());
    }
    return row;
}

function gridConstructor(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        gridContainer.appendChild(createRow(gridSize));
    }
}

gridConstructor(GRID_SIZE);