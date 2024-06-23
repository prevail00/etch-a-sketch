const size = 16;

const body = document.querySelector("body");
const maxHeight = window.innerHeight;
const container = document.querySelector("#container");

container.setAttribute("style", "display: flex; flex-direction: column;")

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

