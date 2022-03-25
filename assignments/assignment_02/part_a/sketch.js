// Create time variables
let h, m, s;
let digitalHour;
let amPm;
// Set clock size
let canvasSize = 800;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  angleMode(DEGREES);
}

function draw() {
  background(59, 43, 68); // purple

  // Grab current time and assign to variables
  h = hour();
  m = minute();
  s = second();

  // for testing purposes
  // h = 0;
  // m = 15;
  // s = 45;

  // Text settings
  textSize(40);
  textAlign(CENTER);
  textFont("Helvetica");
  textStyle(BOLD);
  strokeWeight(0);
  stroke(255);
  fill(255);

  /* Clock Numbers */
  text("1", canvasSize / 2, 90);
  text("3", (canvasSize / 12) * 11 - 15, canvasSize / 2 + 15);
  text("6", canvasSize / 2, (canvasSize / 12) * 11);
  text("9", canvasSize / 12 + 15, canvasSize / 2 + 15);

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
  // reset zero value to 12
  digitalHour = h % 12;
  if(digitalHour == 0){
    digitalHour = 12;
  }
  // Set AM or PM
  if(h >12){
    amPm = " PM";
  }else{
    amPm = " AM";
  }
  text(nf(digitalHour, 2, 0) + ":" + nf(m, 2, 0) + ":" + nf(s, 2, 0) + amPm, canvasSize / 2, 35);
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

  // setting color for minute hand
  stroke("rgba(97, 139, 74, 0.9)"); // light green

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
  // setting color for hour hand
  stroke("rgba(36, 80, 214, 0.9)"); // light blue

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
