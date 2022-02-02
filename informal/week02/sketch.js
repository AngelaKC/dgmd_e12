// the initial rotation speed for the windmills
let millSpeed1 = 0;
let millSpeed2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // windmill 1
  push();
  // move the origin to the left of the canvas
  translate(windowWidth / 6, windowHeight / 6);
  // windmill base
  fill(59, 43, 68); // purple
  beginShape();
  vertex(-15, -15);
  vertex(-50, 200);
  vertex(50, 200);
  vertex(15, -15);
  endShape(CLOSE);
  text("Speed controlled by x-axis", -75, 220);

  // windmill blades
  fill(255);   // white
  rotate(radians(millSpeed1));
  triangle(0, 0, 100, 50, 50, 100);
  triangle(0, 0, -100, -50, -50, -100);
  triangle(0, 0, -100, 50, -50, 100);
  triangle(0, 0, 100, -50, 50, -100);

  ellipse(0, 0, 30,);

  pop();

  // windmill 2
  push();
  // move the origin to the center of the canvas
  translate(windowWidth / 2, windowHeight / 2);
  // windmill base
  beginShape();
  vertex(-15, -15);
  vertex(-50, 200);
  vertex(50, 200);
  vertex(15, -15);
  endShape(CLOSE);
  text("Speed controlled by y-axis", -75, 220);
  // windmill blades
  fill(59, 43, 68);  // purple
  rotate(radians(millSpeed2));
  triangle(0, 0, 100, 50, 50, 100);
  triangle(0, 0, -100, -50, -50, -100);
  triangle(0, 0, -100, 50, -50, 100);
  triangle(0, 0, 100, -50, 50, -100);
  fill(59, 43, 68); // purple
  ellipse(0, 0, 30,);
  pop();

  // adjust speed of windmills bases on mouse moving accross x and y axis
  millSpeed1 += 5 + map(mouseX, 0, windowWidth, -10, 10);
  millSpeed2 += 5 + map(mouseY, 0, windowHeight, -10, 10);
}
