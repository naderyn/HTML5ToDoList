// Get the canvas element and set its context to 2D
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the initial stroke color, width and fill color
let strokeColor = "#000000";
let strokeWidth = 5;
let fillColor = "#000000";

// Set the initial tool to be the pencil
let currentTool = "pencil";

// Set the initial position of the mouse
let mouseX = 0;
let mouseY = 0;

// Set the initial state of the mouse button
let mouseDown = false;

// Add event listeners to the canvas element
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

// Add event listeners to the toolbar buttons
document.getElementById("pencil").addEventListener("click", selectPencil);
document.getElementById("line").addEventListener("click", selectLine);
document.getElementById("rectangle").addEventListener("click", selectRectangle);
document.getElementById("circle").addEventListener("click", selectCircle);
document.getElementById("eraser").addEventListener("click", selectEraser);

// Set the initial canvas size
canvas.width = 800;
canvas.height = 600;

// Function to start drawing
function startDrawing(event) {
  mouseDown = true;
  mouseX = event.clientX - canvas.offsetLeft;
  mouseY = event.clientY - canvas.offsetTop;
}

// Function to stop drawing
function stopDrawing() {
  mouseDown = false;
}

// Function to draw on the canvas
function draw(event) {
  if (!mouseDown) return;
  ctx.beginPath();

  // Set the stroke color, width and fill color
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.fillStyle = fillColor;

  if (currentTool === "pencil") {
    ctx.moveTo(mouseX, mouseY);
    mouseX = event.clientX - canvas.offsetLeft;
    mouseY = event.clientY - canvas.offsetTop;
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  } else if (currentTool === "line") {
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
  } else if (currentTool === "rectangle") {
    ctx.rect(mouseX, mouseY, event.clientX - canvas.offsetLeft - mouseX, event.clientY - canvas.offsetTop - mouseY);
    ctx.fill();
    ctx.stroke();
  } else if (currentTool === "circle") {
    const radius = Math.sqrt(Math.pow(event.clientX - canvas.offsetLeft - mouseX, 2) + Math.pow(event.clientY - canvas.offsetTop - mouseY, 2));
    ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  } else if (currentTool === "eraser") {
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop, strokeWidth / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.globalCompositeOperation = "source-over";
  }
}

// Function to select the pencil tool
function selectPencil() {
  currentTool = "pencil";
}

// Function to select the line tool
function selectLine() {
  currentTool = "line";
}

// Function to select the rectangle tool
function selectRectangle() {
  currentTool = "rectangle";
}

// Function to select the circle tool
function selectCircle() {
  currentTool = "circle";
}

// Function to select the eraser tool
function selectEraser() {
  currentTool = "eraser";
}

// Function to change the stroke
