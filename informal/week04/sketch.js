let canvasWidth = 1000;
let canvasHeight = 750;
let centerX = canvasWidth / 2;
let centerY = canvasHeight / 2;
let d = 100;
let a = 0;
let x, y;
let r = 100;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(10);
  fill(243, 218, 6);
  strokeWeight(7);
  stroke("rgba(243, 176, 6,0.1)");
  ellipse(centerX, centerY, d);
}

function draw() {


  /* Center */


  /* Orbit 1*/
  noStroke();
  fill(205, 205, 207);

  centerY = sin(radians(a)) * r;
  centerX = cos(radians(a)) * r;
  ellipse(centerX + d + 4, centerY + d + 4, d / 2);
  a += 3;

  /* Planets 
  Sun:     100.0
  Mercury:   0.3 distance:   4.163
  Venus:     0.8 distance:   7.767
  Earth:     0.9 distance:  10.745
  Mars:      0.4 distance:  16.368
  Jupiter   10.2 distance:  55.904
  Saturn     8.3 distance: 102.521
  Uranus     3.3 distance: 206.214
  Neptune    3.2 distance: 323.291
  Pluto      0.1 distance: 424.815
  */
}
