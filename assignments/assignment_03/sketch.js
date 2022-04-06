/* Color array */
let myColors = [
  "rgba(59, 43, 68, 0.95)", // purple - 0
  "rgba(250,70,100, 0.2)", // pink - 1
  "rgba(36,80,214, 0.2)", // blue - 2
  "rgba(53, 153, 146, 0.2)", // teal - 3
  "rgba(111, 219, 210, 0.2)", // light teal - 4
];
let myPurple = "rgb(59, 43, 68)"; // purple without transparency
let x = 100; // x location
let y = 180; // y location
let ellipseWidth = 0; // used to size circles
let squareSize = 0; //used to size squares
let arrayItem = 0; // used to pull values from array
let clickToggle = false; // controls transformation
let canvasHeight = 768;
let canvasWidth = 1024;

function setup() {
  /* Used code from this site ti wrangle the canvas:
  https://github.com/processing/p5.js/wiki/Positioning-your-canvas */
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // Move the canvas so it’s inside <section id="sketch-holder">.
  canvas.parent("sketch-holder");
  drawBase(); // draws base image
  canvas.mouseClicked(toggler); // only fires when user clicks on canvas
}

function draw() {
  transformation(); // runs transformation 

}
// this function sets the clickToggle variable when mouse is clicked
function toggler() {
  if (clickToggle) {
    // if value is true change to false
    clickToggle = false;
  } else {
    // else value is false and change to true
    clickToggle = true;
  }
}
function drawBase() {
  /* Building foundation base inspired by the Bauhaus painting */

  background(myPurple);
  fill(250, 70, 100); // pink
  stroke(59, 43, 68); // lighter purple outlines on rectangles
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
function transformation() {
  // controls transformation to base drawing created in setup

  // allows user to toggle transformations on/off with mouse click
  if (clickToggle) {
    noStroke();
    // set in mouseClicked function defined below
    /* Circles */
    // resets x and y values for circle locations
    x = round(random(0, +canvasWidth));
    y = round(random(0, +canvasHeight));
    push(); // adjusts origin and draws circle
    //translates origin to place circles randomly on canvas
    translate(x, y);
    fill(myColors[0]); // purple
    ellipseWidth = round(random(1, 50)); // changes size of circles randomly
    ellipse(0, 0, ellipseWidth);
    pop(); // removes adjustments
    /* End Circles */

    /* Triangles */
    // resets x and y values for triangle locations
    x = round(random(0, canvasWidth));
    y = round(random(0, canvasHeight));

    arrayItem = round(random(0, 4));
    fill(myColors[arrayItem]); // choose random color
    push(); // adjusts origin and draws triangle
    //translates origin to place triangles randomly on canvas
    translate(x, y);
    beginShape(TRIANGLES);
    vertex(10, 15);
    vertex(50, 5);
    vertex(10, 25);
    vertex(0, 16);
    vertex(4, 10);
    vertex(0, 21);
    endShape();
    pop(); // removes adjustments
    /* End Triangles */

    for (let i = 0; i < 50; i++) {
      /* Squares */
      // controls number of circle/triangles to number of squares ratio
      // change x and y values to random locations within canvas size
      x = round(random(0, +canvasWidth));
      y = round(random(0, +canvasHeight));

      arrayItem = round(random(1, 4)); // excludes purple
      fill(myColors[arrayItem]); // choose random color
      push(); // adjusts origin
      //translates origin to place squares randomly on canvas
      translate(x, y);
      //create small square
      squareSize = round(random(1, 65)); // changes square sizes randomly
      square(x, y, squareSize);
      pop(); // removes adjustments
    }
    /* End Squares */
  }
}
function keyPressed(){
  if(keyCode === TAB){
    clear();
    drawBase();
  }
}
