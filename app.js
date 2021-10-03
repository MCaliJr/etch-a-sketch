const sketchArea = document.getElementById("sketchArea");

function makeRows(rows, cols) {
  sketchArea.style.setProperty("--grid-rows", rows);
  sketchArea.style.setProperty("--grid-cols", cols);
  for (ii = 0; ii < rows * cols; ii++) {
    let cell = document.createElement("div");

    sketchArea.appendChild(cell).className = "grid-item";
  }
}

makeRows(12, 12);

// This handler will be executed only once when the cursor
// moves over the unordered list
sketchArea.addEventListener(
  "mouseover",
  function (event) {
    // highlight the mouseenter target
    event.target.style.backgroundColor = "purple";
  },
  false
);
