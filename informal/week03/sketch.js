let myColors = [
  "rgba(59, 43, 68, .2)", // purple
  "rgba(250,70,100, .1)", // pink
  "rgba(36,80,214, .1)", // blue
  "rgba(53, 153, 146, .1)", // teal
  "rgba(111, 219, 210, .1)", // light teal
];
let canvasWidth = 700;
let canvasHeight = 500;
let x = 100;
let y = 180;
let timer = 0;
let arrayLoc = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(173, 168, 168);
  //instructions to user
  textSize(25);
  text("Hold mouse down to add color", 20, 30, 500, 25);
}

function draw() {
  noStroke();
  // only add squares if mouse is pressed
  if (mouseIsPressed) {
    // use timer to control speed square creation
    if (millis() >= 1000 + timer) {
      timer = millis();
      arrayLoc = round(random(0, 4)); // variable to hold the value used to call colors from myColors array

      // change x and y values to random locations within canvas size
      x = round(random(1, +canvasWidth));
      y = round(random(1, +canvasHeight));

      // choose random color
      fill(myColors[arrayLoc]);

      //translates origin to place squares randomly on canvas
      translate(x, y);

      //create small square
      beginShape();
      vertex(0, 0);
      vertex(35, 0);
      vertex(35, 35);
      vertex(0, 35);
      endShape(CLOSE);
    }
  }
}
