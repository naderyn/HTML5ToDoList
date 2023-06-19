const lineBtn = document.getElementById('line-btn');
const circleBtn = document.getElementById('circle-btn');
const rectBtn = document.getElementById('rect-btn');
const clearBtn = document.getElementById('clear-btn');
const svgContainer = document.querySelector('#svg-container svg');

lineBtn.addEventListener('click', () => {
   const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
   line.setAttribute("x1", "100");
   line.setAttribute("y1", "100");
   line.setAttribute("x2", "400");
   line.setAttribute("y2", "400");
   line.setAttribute("stroke", "blue");
   svgContainer.appendChild(line);
});

circleBtn.addEventListener('click', () => {
   const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
   circle.setAttribute("cx", "250");
   circle.setAttribute("cy", "250");
   circle.setAttribute("r", "100");
   circle.setAttribute("fill", "red");
   circle.setAttribute("stroke", "black");
   svgContainer.appendChild(circle);
});

rectBtn.addEventListener('click', () => {
   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
   rect.setAttribute("x", "100");
   rect.setAttribute("y", "100");
   rect.setAttribute("width", "300");
   rect.setAttribute("height", "200");
   rect.setAttribute("fill", "green");
   rect.setAttribute("stroke", "black");
   svgContainer.appendChild(rect);
});

clearBtn.addEventListener('click', () => {
   while (svgContainer.firstChild) {
      svgContainer.removeChild(svgContainer.firstChild);
   }
});
