var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var x = canvas.width / 2;
var y = canvas.height - 300;
var dx = 2;
var dy = -2;
var img = new Image();
img.src = 'DVDVideoHalfSize.png';

function drawBall() {
  ctx.beginPath();
  ctx.drawImage(img, x, y);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  if (x + dx > canvas.width-img.width || x + dx < 0) {
    dx = -dx;
  }
  if (y + dy > canvas.height-img.height || y + dy < 0) {
    dy = -dy;
  }
}

setInterval(draw, 20);
