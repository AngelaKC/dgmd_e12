let canvasWidth = 1024;
let canvasHeight = 768;
let myBackgrounds = [];
let myImgUrls = [
  "images/astronaut.jpg", // 0
  "images/blueBricks.jpg", // 1
  "images/blueConfetti.jpg", // 2  
  "images/candles.jpg", // 3
  "images/dinosaurParty.jpg", // 4
  "images/multiColorBalloons.jpg", // 5
  "images/neutralCake.jpg", // 6
  "images/paperPackages.jpg", // 7
  "images/pinkBalloons.jpg", // 8
  "images/pinkIcing.jpg", // 9
  "images/rainbowSprinkles.jpg", // 10
  "images/sharks.jpg", // 11
  "images/sprinkles.jpg", // 12
  "images/whiteCupcakes.jpg", // 13
];
let textField, output, button;
let clickToggle = false;
// preload images
function preload() {
  for (let i = 0; i < myImgUrls.length; i++) {
    myBackgrounds[i] = loadImage(myImgUrls[i]);
  }
}
function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // var canvas = createCanvas(windowWidth, windowHeight);
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

  // creating drop down options
  sel = createSelect();
  sel.position(10, 10);
  sel.option("Select Theme", "100");
  sel.option("Astronaut Cupcakes", "0");
  sel.option("Blue Bricks", "1");
  sel.option("Blue Confetti", "2");
  sel.option("Birthday Candles", "3");
  sel.option("Dinosaur Party", "4");
  sel.option("Multi Color Balloons", "5");
  sel.option("Cake", "6");
  sel.option("Paper Packages", "7");
  sel.option("Pink Balloons", "8");
  sel.option("Pink Icing", "9");
  sel.option("Rainbow Sprinkles", "10");
  sel.option("Sharks", "11");
  sel.option("Sprinkles", "12");
  sel.option("White Cupcakes", "13");
  sel.changed(mySelectEvent);
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

function draw() {}

function mySelectEvent() {
  // imageMode(CENTER);
  image(myBackgrounds[sel.value()], 0, 0);
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
