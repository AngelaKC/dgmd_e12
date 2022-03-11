let h = 0;
let m = 0;
let s = 0;
let canvasSize = 900;
/* Color array */
let myColors = [
  "rgba(250,70,100, 0.5)", // pink - 0
  "rgba(36,80,214, 0.5)", // blue - 1
  "rgba(53, 153, 146, 0.5)", // teal - 2

];

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize, WEBGL);
  canvas.parent("sketch-holder");
}

function draw() {
  background(59, 43, 68); // purple
  // background(255);

  h = hour() * 10;
  m = minute() *10;
  s = second() *10;
  // h = 10;
  // m = 11;
  // s = 11;
  noStroke();

  /* Hour */
  push();
  translate(-50, -50);
  fill(myColors[0]);
  rotate(h);
  quad(h, 31, 86, h, -h, 63, h,-h);
  pop();

  /* Minute */

  push();
  translate(-50, -150);
  fill(myColors[1]);

  rotate(m);
  quad(m, 31, m, m, -m, 63, -m,-m);
  pop();

  /* Second */
  push();
  translate(-100, -100);
  fill(myColors[2]);

  rotate(s);
  quad(s, 31, 86, s, -s, 63, s,-s);

  pop();
}
