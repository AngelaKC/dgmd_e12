let h = 0;
let m = 0;
let s = 0;
let canvasSize = 800;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  angleMode(DEGREES);
}

function draw() {
  background(59, 43, 68); // purple

  //grab current time and assign to variables
  h = hour();
  m = minute();
  s = second();

  // Text settings
  textSize(40);
  textAlign(CENTER);
  textFont("Helvetica");
  textStyle(BOLD);
  strokeWeight(0);
  stroke(255);
  fill(255);

  /* Clock Numbers */
  text("1", canvasSize / 2, 100);
  text("3", (canvasSize / 12) * 11, canvasSize / 2);
  text("6", canvasSize / 2, (canvasSize / 12) * 11);
  text("9", canvasSize / 12, canvasSize / 2);

  // draws digital clock
  drawDigital();

  // move origin to center of canvas
  translate(canvasSize / 2, canvasSize / 2);
  rotate(-90);

  // draws analog clock
  drawAnalog();
}
function drawDigital() {
  /*uses nf to format time values into Strings 
  and zero fill minutes and seconds < 10 */
  textSize(25);
  text(h + ":" + nf(m, 2, 0) + ":" + nf(s, 2, 0), canvasSize / 2, 35);
}

function drawAnalog() {
  strokeWeight(8);

  /* Second Hand */
  stroke(154, 140, 152); // light purple

  // using map to ensure 60 rotations will rotate 360 degrees
  let sAngle = map(s, 0, 60, 0, 360);

  // using push & pop to control rotations separately
  push();
  strokeWeight(8);
  rotate(sAngle);
  rect(0, 0, canvasSize / 2.9, 1);
  pop();

  // setting color for minute and hour hands
  stroke(97, 139, 74); // light green

  /* Minute Hand */
  // using map to ensure 60 rotations will rotate 360 degrees
  let mAngle = map(m, 0, 60, 0, 360);

  // using push & pop to control rotations separately
  push();
  strokeWeight(8);
  rotate(mAngle);
  rect(0, 0, canvasSize / 3.5, 6);
  pop();

  /* Hour hand */
  // using map to ensure 60 rotations will rotate 360 degrees
  // using modulus operator to we are mapping 12 spots, not 24 hour
  let hAngle = map(h % 12, 0, 12, 0, 360);

  // using push & pop to control rotations separately
  push();
  strokeWeight(8);
  rotate(hAngle);
  rect(0, 0, canvasSize / 5, 6);
  pop();

  /* Clock Center */
  noStroke();
  fill(64, 83, 27); // dark green
  circle(0, 0, 100);
}
