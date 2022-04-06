let canvasWidth = 1000;
let canvasHeight = 500;
let myColors = [
  "rgb(255, 190, 11)", // 0
  "rgb(251, 86, 7)", // 1
  "rgb(255, 0, 110)", // 2
  "rgb(131, 56, 236)", // 3
  "rgb(58, 134, 255)", // 4
];
let myPinks = [
  "rgb(255,0,129)", // 0
  "rgb(255,72,165)", // 1
  "rgb(255,119,188)", // 2
  "rgb(255,174,215)", // 3
  "rgb(255,202,229)", // 4
];
let myBlues = [
  "rgb(0,255,255)", // 0
  "rgb(0,219,255)", // 1
  "rgb(16,165,245)", // 2
  "rgb(12,113,224)", // 3
  "rgb(8,89,198)", // 4
];
let textField, output, button;
let clickToggle = false;
let circle = {
  // circle properties
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  circleSize: 5,

  // METHODS of circle object
  change: function (newX, newY, newSize) {
    // pass in values to change location and size
    this.x = newX;
    this.y = newY;
    this.circleSize = newSize;

    // constrain() is a P5 function that limits the range of a var
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  },

  display: function () {
    // draw the circle with at the current location and size
    ellipse(this.x, this.y, this.circleSize, this.circleSize * 3);
  },
};
function preload() {}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  noStroke();
  // get user input
  textField = select("#name");
  textField = createInput();
  textField.position(145, 30);
  textField.parent("name");
  // choose color palette
  radio = createRadio();
  radio.option("1", "blue");
  radio.option("2", "pink");
  radio.option("3", "multi");
  radio.selected("1");
  radio.style("width", "60px");
  radio.position( 145,60);
  textAlign(CENTER);
  radio.parent("color");

  output = select("#output");
  output.position(windowWidth / 4, windowHeight / 2);
  button = createButton("Start/Stop");
  button.position(160, 135);
  button.parent("input");
  button.mousePressed(newName);
}

function draw() {
  let newCircleSize = round(random(1, 200));
  if (clickToggle) {
    noStroke();
    let palette = radio.value();
    if (palette == 1) {
      fill(myBlues[round(random(0, 4))]);
    } else if (palette == 2) {
      fill(myPinks[round(random(0, 4))]);
    } else {
      fill(myColors[round(random(0, 4))]);
    }

    circle.display();
    randomSize = circle.change(
      round(random(0, windowWidth)),
      round(random(0, windowHeight)),
      newCircleSize
    );
  }
}
function newName() {
  let message = "Happy Birthday " + textField.value() + "!!!";
  output.html(message);
  toggler();
}
// this function sets the clickToggle variable when mouse is clicked
function toggler() {
  if (clickToggle) {
    // if value is true change to false
    clickToggle = false;
  } else {
    clear();
    // else value is false and change to true
    clickToggle = true;
  }
}
