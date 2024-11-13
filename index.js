import "./styles.css";
const grid = document.querySelector(".grid");

for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.setAttribute('draggable', 'true');
  square.setAttribute('droppable', 'true');
  grid.appendChild(square);
}

let squareBoxes = document.querySelectorAll(".square");
squareBoxes.forEach(cell => {
  cell.addEventListener('click', (e) => {
    cell.style.backgroundColor = '#03adfc';
  });
});

let dragged;
squareBoxes.forEach(cell => {
  cell.addEventListener("dragstart", (e) => {
    dragged = e.target.style.backgroundColor;
    console.log("dragging.................");
  });
  cell.addEventListener("dragover", (event) => {
    cell.style.backgroundColor = dragged;
    event.preventDefault();
  });
  cell.addEventListener("drop", (e) => {
    e.preventDefault();
    cell.style.backgroundColor = dragged;
  });
});

