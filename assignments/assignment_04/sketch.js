let canvasWidth = 1024;
let canvasHeight = 768;
// let myBackgrounds = [];
// let myConfetti = [];
let confetti;
let textField, output, button;
let sel, themeChoice;
let clickToggle = false;
let myBG;
let myFile = [];

function preload() {
  // myFile = loadJSON("data/themes.json");
}
function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("sketch-holder");
  // positions the canvas and used z-index to
  // make it a back ground image
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
  sel.option("Blue Bricks", "0");
  sel.option("Birthday Candles", "1");
  sel.option("Pink Icing", "2");
  sel.changed(mySelectEvent);


  // // creating Button element
  // output = select("#output");
  // output.position(windowWidth / 4, windowHeight / 2);
  // button = createButton("Start/Stop");
  // // using position() to control location
  // button.position(160, 135);
  // // using parent()
  // button.parent("input");
  // // using element-specific event handler
  // // and callback function
  // button.mousePressed(startTransformation);
}

function draw() {}
function mySelectEvent() {
   themeChoice = sel.value();
  console.log(themeChoice);
  // imageMode(CENTER);

  // loadJSON("data/themes.json",processTheme(sel.val));

  // image(myFile.id[sel.value].photo, 0, 0);
}
function processTheme(themeNum) {
  console.log(themeNum);
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
