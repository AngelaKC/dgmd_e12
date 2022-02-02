function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  // text("X: " + mouseX, 20, 30);
  // text("Y: " + mouseY, 20, 50);

  textStyle(normal);
  textSize(24);
  fill(250, 235, 205);
  ellipse(300, 300, 150, 200);

  // glasses top
  line(245, 280, 355, 280);
  // left eye
  ellipse();
  ellipseMode(RADIUS);
  fill(250, 235, 205);
  ellipse(275, 300, 20, 18); // Outer glasses
  ellipseMode(CENTER);
  fill(255);
  ellipse(275, 300, 22, 8); // outer eyeball
  ellipseMode(CENTER);
  fill(47, 79, 79);
  ellipse(275, 300, 3, 3); // Inner eyeball
  // right eye
  ellipseMode(RADIUS);
  fill(250, 235, 205);
  ellipse(325, 300, 20, 18); // Outer glasses
  ellipseMode(CENTER);
  fill(255);
  ellipse(325, 300, 22, 8); // outer eyeball
  ellipseMode(CENTER);
  fill(47, 79, 79);
  ellipse(325, 300, 3, 3); // Inner eyeball
  // nose
  fill(250, 235, 205);
  triangle(300, 290, 295, 330, 305, 330);
  //mouth
  noFill();
  beginShape();
  vertex(280, 350);
  vertex(325, 350);
  vertex(330, 348);
  endShape();
  // hair left
  fill(169, 169, 169);
  beginShape(TRIANGLES);
  vertex(210, 375);
  vertex(230, 255);
  vertex(240, 375);
  endShape();
  // hair right
  beginShape(TRIANGLES);
  vertex(360, 375);
  vertex(370, 255);
  vertex(390, 375);
  endShape();
  // hat
  fill(59, 43, 68);
  beginShape(TRIANGLES);
  vertex(215, 275);
  vertex(390, 275);
  vertex(300, 155);
  endShape();
  ellipse(300, 155, 30, 30);
}
