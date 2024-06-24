const maxGridSize = 100;
const setupButton = document.querySelector("#btn-setup");
const buttonHeight = setupButton.offsetHeight;
const maxHeight = window.innerHeight - buttonHeight;
const body = document.querySelector("body");
const container = document.querySelector("#container");

setupButton.addEventListener("click", () => {
    createNewCanvas(getCanvasSize());
});

createNewCanvas(16);


function getCanvasSize() {
    let size = 0;
    while (size <= 0 || size > maxGridSize || isNaN(size)) {
        size = prompt("Set the resolution");
    }
    return size;
}

function deleteAllCells() {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
      }
}

function createNewCanvas(size) {
    if (size <= 0 ||size > maxGridSize || isNaN(size)) {
        alert("Invalid canvas size");
        return;
    }

    deleteAllCells();

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.setAttribute("class", "row");
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            row.appendChild(cell);
            cell.setAttribute("class", "cell");
            cell.setAttribute("style", `height: ${maxHeight / size}px; width: ${maxHeight / size}px;`);
        }
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
        });
    });
}