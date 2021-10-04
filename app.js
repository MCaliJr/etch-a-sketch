// Select scalable square which grid will be created in
const sketchArea = document.getElementById("sketchArea");

// Select grid that user created and convert it from HTML Collection to array
let sketchGrid = sketchArea.getElementsByClassName("grid-item");
let gridArray = Array.prototype.slice.call(sketchGrid);

// Define initial grid size
let userRows = 16;

// Choose buttons from menu
const black = document.querySelector(".black");
const random = document.querySelector(".random");
const rainbow = document.querySelector(".rainbow");
const pastel = document.querySelector(".pastel");
const eraser = document.querySelector(".eraser");
const gridOnOff = document.querySelector(".gridOnOff");
const reset = document.querySelector(".reset");
const gridSize = document.querySelector(".gridSize");

// Add certain effect to buttons using functions
black.addEventListener("click", () => {
  draw("black");
});

// Randomly chosen color
random.addEventListener("click", () => {
  draw(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
});

// Randomly chosen color (different on each grid part)
rainbow.addEventListener("click", () => {
  drawRandom();
});

// Randomly chosen pastel color
pastel.addEventListener("click", () => {
  drawRandomPastel();
});

// Delete background from grid
eraser.addEventListener("click", () => {
  draw("");
});

// Add / delete grid from the drawing
gridOnOff.addEventListener("click", () => {
  gridArray.forEach((grid) => {
    grid.classList.toggle("gridBorder");
  });
});

// Reset current drawing
reset.addEventListener("click", () => {
  makeRows(userRows, userRows);
});

// Create starting grid
makeRows(userRows, userRows);

// Ask user for size of grid (smaller than 100x100) and draw it
gridSize.addEventListener("click", () => {
  userRows = prompt(
    "How big You want Your grid to be? (provide number, max 100)"
  );
  if (userRows == null) {
    return;
  } else if (userRows <= 100) {
    makeRows(userRows, userRows);
  } else {
    alert("Hey... I asked for a number that's lesser than 100");
  }
});

// Draw grid of specified size
function makeRows(rows, cols) {
  // Delete current grid so new one doesn't stack with previous one
  sketchArea.innerHTML = "";
  // Add style to drawing square specifying grid size
  sketchArea.style.setProperty("--grid-rows", rows);
  sketchArea.style.setProperty("--grid-cols", cols);
  // Draw grid of specified dimensions
  for (ii = 0; ii < rows * cols; ii++) {
    let cell = document.createElement("div");
    // Append cells to drawing square and add "grid-item" class to them
    sketchArea.appendChild(cell).className = "grid-item";
  }

  // Select grid that user created and convert it from HTML Collection to array
  gridArray = Array.prototype.slice.call(sketchGrid);
  draw("black");
}

// Draw specified color in cell we hover over
function draw(gridColor) {
  gridArray.forEach((grid) => {
    grid.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = gridColor;
    });
    false;
  });
}

// Draw random color in each cell we hover over
function drawRandom() {
  gridArray.forEach((grid) => {
    grid.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = `#${randomColor()}`;
    });
    false;
  });
}

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Draw random pastel color in each cell we hover over
function drawRandomPastel() {
  gridArray.forEach((grid) => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    grid.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = `${getRandomPastelColor()}`;
    });
    false;
  });
}

// Get random pastel color
function getRandomPastelColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}
