const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty(1, rows);
  container.style.setProperty(1, cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16,16);