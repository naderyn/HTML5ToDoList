document.addEventListener("DOMContentLoaded", function() {

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const clearBtn = document.getElementById("clear-btn");
    const brushSize = document.getElementById("brush-size");
    const brushColor = document.getElementById("brush-color");
    const lineBtn = document.getElementById("line-btn");
    const rectBtn = document.getElementById("rect-btn");
    const circleBtn = document.getElementById("circle-btn");
  
    let isDrawing = false;
    let isLine = false;
    let isRect = false;
    let isCircle = false;
    let startX, startY;
    let lastX, lastY;
  
    function startDrawing(e) {
      isDrawing = true;
      if (isLine || isRect || isCircle) {
        startX = e.clientX - canvas.offsetLeft;
        startY = e.clientY - canvas.offsetTop;
      } else {
        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;
      }
    }
  
    function stopDrawing() {
      isDrawing = false;
      isLine = false;
      isRect = false;
      isCircle = false;
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      if (isLine) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.strokeStyle = brushColor.value;
        context.lineWidth = brushSize.value;
        context.stroke();
      } else if (isRect) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let width = e.clientX - startX - canvas.offsetLeft;
        let height = e.clientY - startY - canvas.offsetTop;
        context.beginPath();
        context.rect(startX, startY, width, height);
        context.strokeStyle = brushColor.value;
        context.lineWidth = brushSize.value;
        context.stroke();
      } else if (isCircle) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let dx = e.clientX - canvas.offsetLeft - startX;
        let dy = e.clientY - canvas.offsetTop - startY;
        let radius = Math.sqrt(dx*dx + dy*dy);
        context.beginPath();
        context.arc(startX, startY, radius, 0, 2 * Math.PI);
        context.strokeStyle = brushColor.value;
        context.lineWidth = brushSize.value;
        context.stroke();
      } else {
        context.strokeStyle = brushColor.value;
        context.lineWidth = brushSize.value;
        context.lineCap = "round";
  
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
  
        lastX = e.clientX - canvas.offsetLeft;
        lastY = e.clientY - canvas.offsetTop;
      }
    }
  
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function enableLine() {
      isLine = true;
    }
  
    function enableRect() {
      isDrawing = false;
      isLine = false;
      isCircle = false;
      isRect = true;
      startX = canvas.width/2;
      startY = canvas.height/2;
    }
  
    function enableCircle() {
      isDrawing = false;
      isLine = false;
      isRect = false;
      isCircle = true;
      startX = canvas.width/2;
      startY = canvas.height/2;
    }
  
   

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);
    clearBtn.addEventListener("click", clearCanvas);
    lineBtn.addEventListener("click", enableLine);
    rectBtn.addEventListener("click", enableRect);
    circleBtn.addEventListener("click", enableCircle);
      });
    
      