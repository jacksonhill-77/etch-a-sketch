// Determines the amount of squares per side of the grid

let userChosenWidth = 10;

// Selects the grid div and styles its height, width, and display

function selectFirstInClass(className) {
    let element = document.getElementsByClassName(className);
    element = element[0];
    return element
}

function styleContainer(containerName) {
    // containerName.style.
}

function createGridDivs(squaresPerSide) {

    container = selectFirstInClass("container")

    totalSquares = Math.pow(squaresPerSide, 2)

    for (let column = 0; column < squaresPerSide; column++) {
        for (let row = 0; row < squaresPerSide; row++) {
            const cell = document.createElement('div');
            cell.classList.add('div-grid')
            cell.style.gridColumnStart = column + 1;
            cell.style.gridColumnEnd = column + 1;
            cell.style.gridRowStart = row + 1;
            cell.style.gridRowEnd = row + 1;
            container.appendChild(cell)
        }

    }
}

createGridDivs(userChosenWidth)