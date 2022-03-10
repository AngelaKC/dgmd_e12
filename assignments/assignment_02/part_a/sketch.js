let hr = 0;
let mn = 0;
let sec = 0;
const canvasSize = 800;

// the rotation angle for the hands
let angle = 0;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  angleMode(DEGREES);
}

function draw() {
  background(59, 43, 68);  // purple
  hr = hour();
  mn = minute();
  sec = second();
  textSize(40);
  textAlign(CENTER)
  textFont('Helvetica');
  strokeWeight(2);
  stroke(255);
  text('1',canvasSize/2,100);
  text('3',canvasSize/12*11,canvasSize/2);
  text('6',canvasSize/2,canvasSize/12 * 11);
  text('9',canvasSize/12,canvasSize/2);
  drawDigital();
  translate(canvasSize / 2, canvasSize / 2);
  rotate(-90);

  drawClock();

}
function drawDigital(){


    text(hr + ":" + nf(mn,2,0) + ":" + nf(sec,2,0), canvasSize/2, 50);

}

function drawClock() {
  noFill();


  // Seconds display
  strokeWeight(8);
  stroke(97, 139, 74);
  let secAngle = map(sec, 0, 60, 0, 360);
  push();
  strokeWeight(11);
  rotate(secAngle);
  // line(0, 0, canvasSize / 3, 0);
  rect(0, 0, canvasSize/3, 10);
  pop();

  // Minute display
  strokeWeight(8);
  stroke(124, 165, 184);
  let minAngle = map(mn, 0, 60, 0, 360);
  push();
  strokeWeight(20);
  rotate(minAngle);
  // line(0, 0, canvasSize / 4, 0);
  rect(0, 0, canvasSize/4, 10);

  pop();

  // Hours display
  strokeWeight(8);
  stroke(154, 140, 152);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  strokeWeight(20);
  rotate(hourAngle);
  // line(0, 0, canvasSize / 5, 0);
  rect(0, 0, canvasSize/7, 10);

  pop();

  push();
  noStroke();
  fill(64, 83, 27);
  circle(0, 0, 75);
  pop();
}
