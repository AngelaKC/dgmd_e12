let h = 0;
let m = 0;
let s = 0;
const canvasSize = 800;

// the rotation angle for the hands
let angle = 0;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  angleMode(DEGREES);
}

function draw() {
  background(59, 43, 68); // purple
  h = hour();
  m = minute();
  s = second();
  // textSize(40);
  // textAlign(CENTER)
  // textFont('Helvetica');
  // strokeWeight(2);
  // stroke(255);
  // text('1',canvasSize/2,100);
  // text('3',canvasSize/12*11,canvasSize/2);
  // text('6',canvasSize/2,canvasSize/12 * 11);
  // text('9',canvasSize/12,canvasSize/2);
  drawDigital();
  translate(canvasSize / 2, canvasSize / 2);
  rotate(-90);
  drawClock();
}
function drawDigital() {
  text(h + ":" + nf(m, 2, 0) + ":" + nf(s, 2, 0), canvasSize / 2, 50);
}

function drawClock() {
  noFill();
  strokeWeight(8);
  stroke(97, 139, 74);
  let sAngle = map(s, 0, 60, 0, 360);


  push();
  strokeWeight(11);
  rotate(sAngle);
  // line(0, 0, canvasSize / 3, 0);
  rect(0, 0, canvasSize / 3, 10);
  pop();

  // Minute display
  strokeWeight(8);
  stroke(124, 165, 184);
  let mAngle = map(m, 0, 60, 0, 360);
  push();
  strokeWeight(20);
  rotate(mAngle);
  // line(0, 0, canvasSize / 4, 0);
  rect(0, 0, canvasSize / 4, 10);

  pop();

  // Hours display
  strokeWeight(8);
  stroke(154, 140, 152);
  let hAngle = map(h % 12, 0, 12, 0, 360);
  push();
  strokeWeight(20);
  rotate(hAngle);
  // line(0, 0, canvasSize / 5, 0);
  rect(0, 0, canvasSize / 7, 10);

  pop();

  push();
  noStroke();
  fill(64, 83, 27);
  circle(0, 0, 75);
  pop();
}
