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
let songs = [];
let song, songPath, muteImg;

function preload() {
  /**********************************************
   *  - Loads JSON file
   **********************************************/
  let url = "data/themes.json";
  themeData = loadJSON(url);
}
function setup() {
  /**********************************************
   *  - creates Canvas
   *  - sets parent for use in HTML file
   *  - loads songs into a songs[] array
   *  - calls input functions to create
   *    user interactions
   **********************************************/
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("sketch-holder");
  for (let i = 0; i < themeData.themes.length; i++) {
    songPath = themeData.themes[i].song;
    songs[i] = loadSound(songPath);
  }
  getInput();
  createDropdown();
  createToggle();
}
function draw() {
  /**********************************************
   *  - calls toggler() function when button is
   *    pressed
   *  - loads image
   *  - sets text style according to JSON Specs
   *  - prints Birthday massage and includes user
   *    input value
   *  - creates and displays confetti according
   *    to JSON specs
   *  - splices confetti objects, creating twinkling effect
   *  - calls anonymous function when playButton is pressed
   *  - creates Sound On/ Mute button
   **********************************************/
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

    playButton.mousePressed(function () {
      if (songs[themeChoice].isLooping()) {
        // pause the song if it is looping
        songs[themeChoice].pause();
        //toggle the button to say Sound On
        playButton.html("Sound On");
      } else {
        // play the song if paused
        songs[themeChoice].loop();
        //toggle the button to say mute
        playButton.html("Sound Off");
      }
    });
  }
}
function getInput() {
  /**********************************************
   *  - called from setup()
   *  - creates input box to consume user name
   *  - positions box on DOM
   *  - adds parent to DOM paragraph ID
   *  - adds class for CSS control
   *  - adds parent for location on DOM
   **********************************************/
  // used this link to help me solve my placeholder
  // issue: https://github.com/processing/p5.js/issues/3281
  textField = createInput().attribute("placeholder", "Enter Name");
  textField.class("inputName");
  textField.parent("input");
}
function createDropdown() {
  /**********************************************
   *  - called from setup()
   *  - creates drop down options using JSON file
   *    to ensure any additional records in JSON file
   *    will be included as a choice
   *  - positions drop down on DOM
   *  - adds class for CSS control
   *  - executes anonymous function when user
   *    changes selection
   **********************************************/
  themeSel = createSelect().attribute("placeholder", "Select Theme");
  themeSel.class("dropdownSelect");
  themeSel.parent("input");
  themeSel.option("Select Theme", "100");
  for (let i = 0; i < themeData.themes.length; i++) {
    themeSel.option(themeData.themes[i].themeName, i);
  }
  themeSel.changed(function () {
    /**********************************************
     *  - called when selection is changed
     *  - sets themeChoice based on drop down option
     *  - calls processTheme()
     **********************************************/
    themeChoice = themeSel.value();
    /**********************************************
     *  - creates 'Sound On/ Mute' button
     *  - adds class for CSS control
     *  - adds parent for location on DOM
     **********************************************/
    playButton = createButton("Sound On");
    playButton.class("soundButton");
    playButton.parent("input");
    processTheme();
  });
}
function processTheme(data) {
  /**********************************************
   *  - called from anonymous function in createDropdown()
   *    when selection is changed
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
   *  - adds class for CSS control
   *  - assigns to DOM's parent using ID
   **********************************************/
  button = createButton("Create");
  button.class("transform");
  button.parent("input");
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
   *  - called from draw() when button is pressed
   *  - sets the clickToggle variable
   *  - changes value of clickToggle
   *  - if true, it calls clearCanvas()
   *  - changes HTML value on button
   *  - disables dropdown and text field
   **********************************************/
  if (clickToggle) {
    // if value is true change to false
    clearCanvas();
    clickToggle = false;
    button.html("Create");
  } else {
    // else value is false and change to true
    clickToggle = true;
    button.html("Clear");
    themeSel.attribute("disabled", "");
    textField.attribute("disabled", "");
  }
}
function clearCanvas() {
  /**********************************************
   *  - called from toggler()
   *  - stops music and changes HTM on playButton
   *  - removes playButton and button
   *  - removes dropdown and name text field
   *  - clears screen and calls setup()
   *  - clears confettiArray
   **********************************************/
  songs[themeChoice].stop();
  playButton.html("Sound On");
  themeSel.remove();
  textField.remove();
  playButton.remove();
  button.remove();
  clear();
  setup();
  confettiArray = [];
}
class Confetti {
  /**********************************************
   *  - called from draw() 
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
