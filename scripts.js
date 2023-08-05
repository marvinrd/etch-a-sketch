//html references
const container = document.querySelector("#containerMain");
const resetButton = document.querySelector("#resetButton");

//initialize default values
let gridSize = 16;

//function to append child
const appendNewToParent = function (parent, string, inputClass) {
  const div = document.createElement("div");
  div.classList.add(inputClass);
  div.textContent = string;
  parent.appendChild(div);
};

// function to create grids
const createGrids = function () {
  for (i = 1; i <= gridSize; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (j = 1; j <= gridSize; j++) {
      appendNewToParent(column, ``, `grid`);
    }
    container.appendChild(column);
  }

  //apply hover formatting
  const grids = document.querySelectorAll(".grid");
  grids.forEach((node) => {
    node.addEventListener("mouseover", function () {
      //node.classList.add("hover-grid");
      node.setAttribute(
        "style",
        `background-color:rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`
      );
    });
  });
};

// initial grid creation
createGrids();

//function to remove grids
const removeGrids = function () {
  const columns = document.querySelectorAll(".column");
  columns.forEach(function (node) {
    node.remove();
  });
  const grids = document.querySelectorAll(".grid");
  grids.forEach(function (node) {
    node.remove();
  });
  console.log("removed");
};

//size changer
const updateSize = function () {
  do {
    gridSize = prompt(`Type in the grid size (maximum 100):`);
  } while (gridSize > 100 || gridSize < 0);
};

// resetButton function
resetButton.addEventListener("click", removeGrids);
resetButton.addEventListener("click", updateSize);
resetButton.addEventListener("click", createGrids);
