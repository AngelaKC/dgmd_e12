let myColors = [
  "rgba(59, 43, 68, 0.9)", // purple
  "rgba(250,70,100, 0.2)", // pink
  "rgba(36,80,214, 0.2)", // blue
  "rgba(53, 153, 146, 0.2)", // teal
  "rgba(111, 219, 210, 0.2)", // light teal
];
let x = 100;
let y = 180;
let timer = 0;
let arrayLoc = 0;
let canvasHeight = 768;
let canvasWidth = 1024;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(59, 43, 68);
  fill(250, 70, 100);
  stroke(59, 43, 68);
  strokeWeight(3);
  rect(0, canvasHeight / 10, canvasWidth / 2, (canvasHeight / 10) * 4);
  fill(36, 80, 214);
  rect(canvasWidth / 4 - 15, 0, canvasWidth / 12, (canvasHeight / 4) * 3);
  fill(53, 153, 146);
  rect(
    canvasWidth / 4 + 70,
    (canvasHeight / 4) * 1.3,
    canvasWidth - (canvasWidth / 4 + 70),
    100
  );
  fill(111, 219, 210);
  rect(
    canvasWidth / 4 + 70,
    (canvasHeight / 4) * 1.3 + 100,
    canvasWidth / 4 - 71,
    canvasHeight - (canvasHeight / 4) * 1.3 + 100
  );
  fill(0, 0, 0, 0);
  stroke(100, 49, 130);
  rect(
    canvasWidth / 10,
    canvasHeight / 10 + 20,
    (canvasWidth / 10) * 8,
    (canvasHeight / 10) * 7.6
  );
}

function draw() {
  noStroke();
  // only add squares if mouse is pressed
  if (mouseIsPressed) {
    // use timer to control speed square creation
    if (millis() >= 10 + timer) {
      timer = millis();
      arrayLoc = round(random(0, 4)); // variable to hold the value used to call colors from myColors array

      // change x and y values to random locations within canvas size
      x = round(random(1, +canvasWidth));
      y = round(random(1, +canvasHeight));
      console.log(arrayLoc);
      // choose random color
      fill(myColors[arrayLoc]);
      // fill(0);

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
