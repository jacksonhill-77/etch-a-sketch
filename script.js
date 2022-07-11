let container = document.getElementsByClassName("container");

for (let i = 0; i < 15; i++) {
    let divGrid = document.createElement('div')
    divGrid.style.width = '20px'
    divGrid.style.height = '20px'
    divGrid.style.backgroundColor = 'black'
    divGrid.setAttribute('id', 'div-grid')
    container[0].appendChild(divGrid)
}