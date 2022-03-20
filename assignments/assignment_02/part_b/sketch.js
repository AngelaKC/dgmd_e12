// Create time variables
let h,m,s;
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

  // set variables to hold time related values
  h = (hour() + 1) * 10;
  m = (minute() + 1) * 3;
  s = (second() + 1) * 5;  
  // h = (23+ 1) * 10;
  // m = (59+ 1) * 3;
  // s = (59 + 1) * 5;
  noStroke();

  /* Hour */
  // Using push & pop to modify origins and rotations
  push();
  translate(-50, -50);
  fill(myColors[0]);
  // rotates each hour
  rotate(h);
  // shape changes each hour
  quad(h, 31, 86, h, -h, 63, h, -h);
  pop();

  /* Minute */
  // Using push & pop to modify origins and rotations
  push();
  translate(-50, -150);
  fill(myColors[1]);
  // rotates each minute
  rotate(m);
  // shape changes each minute
  quad(m, 31, m, m, -m, 63, -m, -m);
  pop();

  /* Second */
  // Using push & pop to modify origins and rotations
  push();
  translate(-100, -100);
  fill(myColors[2]);
  // rotates each second
  rotate(s);
  // shape changes each second
  quad(s, 11, 66, s, -s, 43, s, -s);
  pop();
}
