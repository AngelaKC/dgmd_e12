/* Color array */
let myColors = [
  "rgba(250,70,100, 0.2)", // pink
  "rgba(36,80,214, 0.2)", // blue
  "rgba(53, 153, 146, 0.2)", // teal
  "rgba(111, 219, 210, 0.2)", // light teal
];
let myPurple = "rgba(59, 43, 68, 0.9)";
let x = 100; // x location
let y = 180; // y location
let ellipseWidth = 0; // used to size circles
let squareSize = 0; //used to size squares
let arrayItem = 0; // used to pull values from array
let clickToggle = false; // controls transformation
let canvasHeight = 768;
let canvasWidth = 1024;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  /* Building foundation base inspired by the Bauhaus painting */
  background(59, 43, 68);
  fill(250, 70, 100); // pink
  stroke(59, 43, 68); // purple outlines on rectangles
  strokeWeight(3);
  rect(0, canvasHeight / 10, canvasWidth / 2, (canvasHeight / 10) * 4);
  fill(36, 80, 214); // blue
  rect(canvasWidth / 4 - 15, 0, canvasWidth / 12, (canvasHeight / 4) * 3);
  fill(53, 153, 146); //teal
  rect(
    canvasWidth / 4 + 70,
    (canvasHeight / 4) * 1.3,
    canvasWidth - (canvasWidth / 4 + 70),
    100
  );
  fill(111, 219, 210); // light teal
  rect(
    canvasWidth / 4 + 70,
    (canvasHeight / 4) * 1.3 + 100,
    canvasWidth / 4 - 71,
    canvasHeight - (canvasHeight / 4) * 1.3 + 100
  );
  fill(0, 0, 0, 0); // set no fill
  stroke(100, 49, 130); // set outline color - lighter purple
  rect(
    canvasWidth / 10,
    canvasHeight / 10 + 20,
    (canvasWidth / 10) * 8,
    (canvasHeight / 10) * 7.6
  );
}

function draw() {
  // controls transformation to base drawing created in setup

  // allows user to toggle transformations on/off with mouse click
  if (clickToggle) {
    // set in mouseClicked function defined below

    // change x and y values to random locations within canvas size
    x = round(random(0, +canvasWidth));
    y = round(random(0, +canvasHeight));

    noStroke(); // set no outline on squares
    arrayItem = round(random(0, 3)); // choose value used to call color for myColors array
    fill(myColors[arrayItem]); // choose random color

    //translates origin to place squares randomly on canvas
    translate(x, y);

    //create small square
    squareSize = round(random(1, 65)); // changes square sizes randomly
    beginShape();
    vertex(0, 0);
    vertex(squareSize, 0);
    vertex(squareSize, squareSize);
    vertex(0, squareSize);
    endShape(CLOSE);

    for (let i = 0; i <= 10; i++) {
      // resets x and y values for circle locations
      x = round(random(0, +canvasWidth));
      y = round(random(0, +canvasHeight));

      //translates origin to place circles randomly on canvas
      translate(x, y);
      fill(myPurple); // purple
      ellipseWidth = round(random(1, 50)); // changes size of circles randomly
      ellipse(0, 0, ellipseWidth);
    }
  }
}
// this function sets the clickToggle variable when mouse is clicked
function mouseClicked() {
  if (clickToggle) {
    // if value is tru change to false
    clickToggle = false;
  } else {
    // else value is false and change to true
    clickToggle = true;
  }
}
