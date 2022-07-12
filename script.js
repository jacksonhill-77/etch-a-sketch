// Determines the amount of squares per side of the grid

let userChosenWidth = 10;

// Selects the grid div and styles its height, width, and display

function styleContainer(className) {
    let container = document.getElementsByClassName(className);
    container = container[0];
    container.style.width = "500px";
    container.style.height = "100%";
    container.style.display = "inline-block";
    return container
}

function createGridDivs(squaresPerSide, containerName) {
    totalSquares = Math.pow(squaresPerSide)
    for (let i = 0; i < totalSquares; i++) {
        let divGrid = document.createElement('div')
        divGrid.style.width = '20px'
        divGrid.style.height = '20px'
        divGrid.style.backgroundColor = 'black'
        divGrid.setAttribute('class', 'div-grid')
        containerName.appendChild(divGrid)
    }
}

container = styleContainer("container")

createGridDivs(userChosenWidth, container)