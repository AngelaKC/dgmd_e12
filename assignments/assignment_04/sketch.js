let canvasWidth = 1024;
let canvasHeight = 768;
let textField, output, button;
let themeSel, themeChoice;
let clickToggle = false;
let imgPath, myBG;
let textX, textY, fontChoice, fontSize;
let fontColor;
let confettiColors = [];
let confettiArray = [];
let randomColor;
let c, p, message;

function setup() {
  /*
   positions the canvas and uses z-index to
   make it a back ground image
  */
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("sketch-holder");
  // canvas.style("z-index", "-1");
  getInput();
  createDropdown();
  createToggle();
}
function draw() {
  /*
   *  - if confettiColors have loaded, it calls
   *    createConfetti() function
   */
  if (myBG && clickToggle) {
    image(myBG, 0, 0);
    setStyle();
    text("Happy Birthday",canvasWidth/2, (canvasHeight/2-(fontSize+10)))
    message = textField.value() + "!!!";
    text(message, canvasWidth/2, canvasHeight/2);
    if (confettiColors) {
      for (let i = 0; i < 50; i++) {
        randomColor = round(random(0, confettiColors.length - 1));
        c = new Confetti(randomColor);
        confettiArray.push(c);
      }
      if (confettiArray) {
        for (let i = 0; i < confettiArray.length; i++) {
          confettiArray[i].display();
        }
      }
      if (confettiArray.length > 10000) {
        confettiArray.splice(0, 100);
      }
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
   *  - creates drop down options
   *  - positions drop down on DOM
   *  - adds parent to DOM paragraph ID
   *  - executes callback function 'mySelectEvent'
   *    when user changes selection
   **********************************************/
  themeSel = createSelect();
  themeSel.position(180, 30);
  themeSel.option("Select Theme", "100");
  themeSel.option("Blue Bricks", "0");
  themeSel.option("Birthday Candles", "1");
  themeSel.option("Pink Icing", "2");
  themeSel.changed(mySelectEvent);
}
function mySelectEvent() {
  /**********************************************
   *  - called from 'createDropDown' when selection
   *    is changed
   *  - sets themeChoice based on drop down option
   *  - loads JSON file
   *  - execute callback function 'processTheme'
   *    which runs once JSON file is loaded
   **********************************************/
  themeChoice = themeSel.value();
  loadJSON("data/themes.json", processTheme);
}
function processTheme(data) {
  /**********************************************
   *  - called from mySelectEvent
   *  - gets called from loadJSON, once file is loaded
   *  - loads global variables with data from JSON
   *  - uses themeChoice to limit data load to
   *    selected theme's data
   **********************************************/
  imgPath = data.themes[themeChoice].photo;
  myBG = loadImage(imgPath);
  textX = data.themes[themeChoice].textXLoc;
  textY = data.themes[themeChoice].textYLoc;
  fontChoice = data.themes[themeChoice].font;
  fontSize = data.themes[themeChoice].fontSize;
  fontColor = data.themes[themeChoice].textColor;
  confettiColors = data.themes[themeChoice].myColors;
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
  button.mousePressed(toggler);
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
    clickToggle = false;
  } else {
    // else value is false and change to true
    clickToggle = true;
  }
}
class Confetti {
  /**********************************************
   *  - called from createConfetti() to fill array
   *  - called from draw() to display
   *  - class definition for confetti objects
   *  - includes method to display object
   **********************************************/

  constructor(fColor) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.confettiSize = 4;
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
