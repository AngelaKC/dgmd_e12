let canvasWidth = 800;
let canvasHeight = 800;
let myColors = [
  "rgba(255, 190, 11, 0.3)", // 0 - Orange
  "rgba(57, 153, 169, 0.3)", // 1 - blue
  "rgba(253, 174, 24, 0.3)", // 2 - yellow
  "rgba(238, 29, 131, 0.3)", // 3 - Pink
  "rgba(172, 143, 77, 0.3)", // 4 - green
];
let myPinks = [
  "rgba(243, 135, 184, 0.3)", // 0
  "rgba(237, 0, 140, 0.3)", // 1
  "rgba(181, 30, 137, 0.3)", // 2
  "rgba(234, 48, 129, 0.3)", // 3
  "rgba(179, 58, 132, 0.3)", // 4
];
let myBlues = [
  "rgba(57, 153, 169, 0.3)", // 0
  "rgba(85, 197, 209, 0.3)", // 1
  "rgba(43, 92, 158, 0.3)", // 2
  "rgba(34, 158, 211, 0.3)", // 3
  "rgba(0, 162, 120, 0.3)", // 4
];
let textField, output, button;
let myBG, birthdayMsg, myCake
;
let clickToggle = false;
let confetti = {
  // circle properties
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  confettiSize: 9,

  // METHODS of circle object
  change: function (newX, newY) {
    // pass in values to change location and size
    this.x = newX;
    this.y = newY;

    // constrain() is a P5 function that limits the range of a var
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  },

  display: function () {
    // draw the circle with at the current location and size
    square(this.x, this.y, this.confettiSize);
  },
};
function preload() {
  myBG = loadImage("images/FinalProjectPngs/birthdayBG_800.png");
  myCake = loadImage("images/FinalProjectPngs/png_200pixels/cake_200.png");
}
function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // positions the canvas and used z-index to
  // make it a back ground image
  // This is my canvas element
  canvas.parent("sketch-holder");
  // canvas.position(0, 0);
  canvas.style("z-index", "-1");
  noStroke();
  angleMode(DEGREES);
  // get user input
  // Creating an Input Element
  textField = select("#name");
  textField = createInput();
  // using position() to control location
  textField.position(145, 30);
  // using parent
  textField.parent("name");
  // choose color palette
  // creating Radio Button element
  // allows user to choose color palette
  radio = createRadio();
  radio.option("1", "blue");
  radio.option("2", "pink");
  radio.option("3", "multi");
  radio.selected("1");
  // using style() to control look & feel
  radio.style("width", "60px");
  // using position() to control location
  radio.position(145, 60);
  textAlign(CENTER);
  // using parent()
  radio.parent("mycolor");
  // creating start/stop controller
  // creating Button element
  output = select("#output");
  output.position(windowWidth / 4, windowHeight / 2);
  button = createButton("Start/Stop");
  // using position() to control location
  button.position(160, 135);
  // using parent()
  button.parent("input");
  // using element-specific event handler
  // and callback function
  button.mousePressed(startTransformation);

}

function draw() {
  image(myBG, 0, 0);
  image(myCake,325,370);
  // allows user to toggle transformation on/off
  // only runs when toggle is true

  if (clickToggle) {
    stroke('white');
    strokeWeight(2);
    textSize(76);
    textStyle(BOLDITALIC);
    fill(240, 78, 55);
    text(birthdayMsg,400,300);
    noStroke();
    degreeDelta = round(random(-15,15));
    // radio button selection
    let palette = radio.value();
    if (palette == 1) {
      fill(myBlues[round(random(0, 4))]);
    } else if (palette == 2) {
      fill(myPinks[round(random(0, 4))]);
    } else {
      fill(myColors[round(random(0, 4))]);
    }
     for(let i=0; i<5; i++){
      // displays circles
      confetti.display();
      confetti.change(
        round(random(0, canvasWidth)),
        round(random(0, canvasHeight)),
        degreeDelta
      );
    }

  }
}
function startTransformation() {
  // sets message to include user input
  // birthdayMsg = "Happy Birthday " + textField.value() + "!!!";
  birthdayMsg = textField.value() + "!!!";
  // calls toggler() function
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
