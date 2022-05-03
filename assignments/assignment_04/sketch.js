let canvasWidth = 1024;
let canvasHeight = 768;
let themeData;
let textField, output, button;
let themeSel, themeChoice;
let clickToggle = false;
let imgPath, myBG;
let textX, textY, fontChoice, fontSize;
let fontColor;
let confettiSize, confettiCount;
let confettiColors = [];
let confettiArray = [];
let randomColor;
let c, p, message;

function preload() {
  let url = "data/themes.json";
  themeData = loadJSON(url);
}

function setup() {
  /**********************************************
   *  - creates Canvas
   *  - sets parent for use in HTML file
   **********************************************/
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("sketch-holder");
  getInput();
  createDropdown();
  createToggle();
}
function draw() {
  button.mousePressed(toggler);
  if (clickToggle) {
    image(myBG, 0, 0);
    setStyle();
    text("Happy Birthday", canvasWidth / 2, canvasHeight / 2 - (fontSize + 10));
    message = textField.value() + "!!!";
    text(message, canvasWidth / 2, canvasHeight / 2);
    for (let i = 0; i < confettiCount; i++) {
      randomColor = round(random(0, confettiColors.length - 1));
      c = new Confetti(randomColor, confettiSize);
      confettiArray.push(c);
    }
    if (confettiArray) {
      for (let i = 0; i < confettiArray.length; i++) {
        confettiArray[i].display();
      }
    }
    if (confettiArray.length >= confettiCount * 10) {
      confettiArray.splice(0, confettiCount);
    }
  }
}
function getInput() {
  /**********************************************
   *  - called from setup()
   *  - creates input box to consume user name
   *  - positions box on DOM
   *  - adds parent to DOM paragraph ID
   **********************************************/
  // used this link to help me solve my placeholder
  // issue: https://github.com/processing/p5.js/issues/3281
  textField = createInput().attribute("placeholder", "Enter Name");
  textField.position(20, 30);
  textField.parent("name");
}
function createDropdown() {
  /**********************************************
   *  - called from setup()
   *  - creates drop down options using JSON file
   *    to ensure any additional records in JSON file
   *    will be included as a choice
   *  - positions drop down on DOM
   *  - executes callback function 'mySelectEvent'
   *    when user changes selection
   **********************************************/
  themeSel = createSelect().attribute("placeholder", "Select Theme");
  themeSel.position(180, 30);
  themeSel.option("Select Theme", "100");
  for (let i = 0; i < themeData.themes.length; i++) {
    themeSel.option(themeData.themes[i].themeName, i);
  }
  themeSel.changed(mySelectEvent);
}
function mySelectEvent() {
  /**********************************************
   *  - called from 'createDropDown' when selection
   *    is changed
   *  - sets themeChoice based on drop down option
   *  - calls processTheme
   **********************************************/
  themeChoice = themeSel.value();
  processTheme();
}
function processTheme(data) {
  /**********************************************
   *  - called from mySelectEvent
   *  - gets called from loadJSON, once file is loaded
   *  - loads global variables with data from JSON
   *  - uses themeChoice to limit data load to
   *    selected theme's data
   **********************************************/
  imgPath = themeData.themes[themeChoice].photo;
  myBG = loadImage(imgPath);
  textX = themeData.themes[themeChoice].textXLoc;
  textY = themeData.themes[themeChoice].textYLoc;
  fontChoice = themeData.themes[themeChoice].font;
  fontSize = themeData.themes[themeChoice].fontSize;
  fontColor = themeData.themes[themeChoice].textColor;
  confettiColors = themeData.themes[themeChoice].myColors;
  confettiSize = themeData.themes[themeChoice].confettiSize;
  confettiCount = themeData.themes[themeChoice].confettiCount;
}
function createToggle() {
  /**********************************************
   *  - called from setup()
   *  - creates toggle button
   *  - positions button on DOM
   *  - assigns to DOM's parent using ID
   *  - executes callback function 'startTransformation'
   *    when button is pressed
   **********************************************/
  button = createButton("Start/Stop");
  button.position(320, 30);
  button.parent("input");
  // button.mousePressed(startTransformation);
  // button.mousePressed(toggler);
}
function setStyle() {
  /**********************************************
   *  - called from draw() loop
   *  - adjusts style and position based on theme
   *    choice from JSON file
   **********************************************/
  strokeWeight(2);
  stroke(0);
  textAlign(CENTER);
  textSize(fontSize);
  textFont(fontChoice);
  fill(fontColor);
}
function toggler() {
  /**********************************************
   *  - called from start Transformation()
   *  - this function sets the clickToggle variable
   *    when mouse is clicked
   **********************************************/
  if (clickToggle) {
    // if value is true change to false
    clearCanvas();
    clickToggle = false;
  } else {
    // else value is false and change to true
    clickToggle = true;
    // clearCanvas();
  }
  console.log(clickToggle);
}
function clearCanvas() {
  clear();
  setup();
  confettiArray = [];
}
class Confetti {
  /**********************************************
   *  - called from createConfetti() to fill array
   *  - called from draw() to display
   *  - class definition for confetti objects
   *  - includes method to display object
   **********************************************/

  constructor(fColor, cSize) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.confettiSize = cSize;
    this.fillColor = confettiColors[fColor];
  }
  display() {
    /* 
      draw the confetti at the current location
      and size
    */
    noStroke();
    fill(this.fillColor);
    square(this.x, this.y, this.confettiSize);
  }
}
