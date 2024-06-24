const maxGridSize = 100;
let size = 0;

while (size <= 0 || size > maxGridSize) {
    size = prompt("Set the resolution");
}

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

//cells is a node list. Collects all the cells.
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    // and for each one we add a 'click' listener
    cell.addEventListener("mouseover", function (e) {
      e.target.style.background = "black";
        //cell.setAttribute("style", "background-color: black;");
    });
  });

