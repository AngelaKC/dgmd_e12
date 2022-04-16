let canvasWidth = 1024;
let canvasHeight = 684;
let myBackgrounds = [];
let myImgUrls = [
  "images/blackWithBdayCandles.jpg", // 0
  "images/blueAstronautCupcakes.jpg", // 1
  "images/blueBricks.jpg", // 2
  "images/blueConfetti.jpg", // 3
  "images/dinosaurParty.jpg", // 4
  "images/handWithMultiColorBalloons.jpg", // 5
  "images/neutralCakeWithPopcorn.jpg", // 6
  "images/pinkBalloons.jpg", // 7
  "images/pinkBluePurpleSprinkles.jpg", // 8
  "images/pinkIcing.jpg", // 9
  "images/prettyPinkPackages.jpg", // 10
  "images/rainbowSprinkles.jpg", // 11
  "images/sharks.jpg", // 12
  "images/whiteCupcakeonwhiteboards.jpg", // 13
  "images/whiteWithBrownPackages.jpg", // 14
]
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
function preload(){
  for(let i=0; i < myImgUrls.length;i++){
    myBackgrounds[i]=loadImage(myImgUrls[i]);
  }
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  // positions the canvas and used z-index to
  // make it a back ground image
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  noStroke();
  // get user input
  textField = select("#name");
  textField = createInput();
  textField.position(145, 30);
  textField.parent("name");

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
  let newCircleSize = round(random(1, 200));
  // allows user to toggle transformation on/off
  // only runs when toggle is true
  if (clickToggle) {
    noStroke();
    // sets color palette according to 
    // radio button selection
    let palette = radio.value();
    if (palette == 1) {
      fill(myBlues[round(random(0, 4))]);
    } else if (palette == 2) {
      fill(myPinks[round(random(0, 4))]);
    } else {
      fill(myColors[round(random(0, 4))]);
    }
  // displays circles
    circle.display();
    // changes circle sizes ro random sizes
    randomSize = circle.change(
      round(random(0, windowWidth)),
      round(random(0, windowHeight)),
      newCircleSize
    );
  }
}
function startTransformation() {
  // sets message to include user input
  let message = "Happy Birthday " + textField.value() + "!!!";
  // uses html() to modify content of 
  // DOM element
  output.html(message);
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
