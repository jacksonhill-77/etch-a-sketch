// Selects the grid div and styles its height, width, and display

function selectFirstInClass(className) {
    let element = document.getElementsByClassName(className);
    element = element[0];
    return element
}

function randomRGBNumber(min, max) {
    let randomNumber = min + Math.floor(Math.random() * (max - min + 1))
    return randomNumber
}

function randomRGB() {
    const r = randomRGBNumber(0, 255)
    const b = randomRGBNumber(0, 255)
    const g = randomRGBNumber(0, 255)
    const rgb = `rgb(${r},${g},${b})`
    return rgb
}

function mouseEnterEffect(cell) {
    cell.classList.add('mouse-over')
}

function createResetButton() {
    button = document.getElementById("reset-btn")
    let i = 0;
    let squaresPerSide = 0

    container = selectFirstInClass("container")

    button.addEventListener("click", () => {
        while (i < 2) {
            squaresPerSide = prompt("Please enter the amount of squares each grid edge should have.")
            squaresPerSide = Number(squaresPerSide)
            if (squaresPerSide >= 101) {
                alert("Please select a number lower than 100!")
            } else {
                break
            }
        }

        gridCells = document.querySelectorAll('.div-grid');
        gridCells.forEach(cell => {
            cell.remove();
        })

        const gridDivs = document.querySelectorAll(".mouse-over")
        const div = gridDivs[0];
        gridDivs.forEach(function(div) {
            div.classList.remove('mouse-over')
            div.classList.add('div-grid')
        })

        for (let column = 0; column < squaresPerSide; column++) {
            for (let row = 0; row < squaresPerSide; row++) {
                const cell = document.createElement('div');
                cell.classList.add('div-grid')
                cell.style.gridColumnStart = column + 1;
                cell.style.gridColumnEnd = column + 1;
                cell.style.gridRowStart = row + 1;
                cell.style.gridRowEnd = row + 1;
                cell.addEventListener('mouseenter', (e) => mouseEnterEffect(cell))
                container.appendChild(cell)
            }
        }
    })
}

createResetButton()