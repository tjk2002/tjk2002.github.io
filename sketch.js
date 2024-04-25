let currentColor = '#000000';
let tool = 'pen';

function setup() {
  let canvas = createCanvas(700, 500);
  canvas.parent('canvas-container');
  background(255);
  setupTools();

  document.getElementById('download-btn').addEventListener('click', function() {
    saveCanvas(canvas, 'myCanvas', 'jpg');
  });
}

document.getElementById('save-to-gallery-btn').addEventListener('click', function() {
    const dataUrl = canvas.toDataURL('image/png');
    const gallery = JSON.parse(sessionStorage.getItem('gallery')) || [];
    gallery.push(dataUrl);
    sessionStorage.setItem('gallery', JSON.stringify(gallery));
    alert('Saved to gallery!');
});

function setupTools() {
  const colorPicker = document.getElementById('colorPicker');
  colorPicker.addEventListener('change', function() {
    currentColor = this.value;
    if (tool !== 'eraser') {
      tool = 'pen';
    }
  });

  document.getElementById('pen').addEventListener('click', function() {
    tool = 'pen';
  });

  document.getElementById('eraser').addEventListener('click', function() {
    tool = 'eraser';
  });
}

function draw() {
  stroke(currentColor);
  strokeWeight(4);

  if (mouseIsPressed) {
    if (tool === 'eraser') {
      stroke(255);
    } else {
      stroke(currentColor);
    }
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
