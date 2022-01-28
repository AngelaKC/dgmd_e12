let xPos = 200;
let yPos = 300;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(128);
  ellipse(xPos, yPos, 150, 150);
  // triangle(x1, y1, x2, y2, x3, y3)
  rectMode(CENTER);
  rect(100, 100, 50, 50);
  rect(400, 100, 50, 50);
  // xPos = xPos+1;
}
