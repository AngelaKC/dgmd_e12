let canvasWidth = 1024;
let canvasHeight = 768;
let textField, output, button;
let themeSel, themeChoice;
let clickToggle = false;
let imgPath, myBG;
let textX, textY, textFont, textSize;
let fontWeight, fontColor;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // positions the canvas and uses z-index to
  // make it a back ground image
  canvas.parent("sketch-holder");
  canvas.style("z-index", "-1");
  // get user input
  textField = select("#name");
  textField = createInput("Enter Name");
  textField.position(20, 30);
  textField.parent("name");

  // creating drop down options
  themeSel = createSelect();
  themeSel.position(180, 30);
  themeSel.option("Select Theme", "100");
  themeSel.option("Blue Bricks", "0");
  themeSel.option("Birthday Candles", "1");
  themeSel.option("Pink Icing", "2");
  // Use callback function whenever user changes 
  // selection 
  themeSel.changed(mySelectEvent);

  // creating Button element
  button = createButton("Start/Stop");
  button.position(320, 30);
  button.parent("input");
  // using element-specific event handler
  // and callback function
  button.mousePressed(startTransformation);
}

function draw() {
  if (myBG) {
    image(myBG, 0, 0);
    output = select("#output");
    // adjust style and position based
    // on theme choices from JSON
    output.position(windowWidth/textX, windowHeight/textY);
    output.style('font-size',textSize )
    output.style('font-family', textFont)
    output.style('font-weight', fontWeight)
    output.style('color',fontColor )
  }

}
function mySelectEvent() {
  themeChoice = themeSel.value();
  // loads JSON file and uses callback function to
  // do something with the data
  loadJSON("data/themes.json", processTheme);
}
function processTheme(data) {

  imgPath = data.themes[themeChoice].photo;
  myBG = loadImage(imgPath);
  textX = data.themes[themeChoice].textXLoc;
  textY = data.themes[themeChoice].textYLoc;
  textFont = data.themes[themeChoice].font;
  textSize = data.themes[themeChoice].fontSize;
  fontWeight = data.themes[themeChoice].fontWeight;
  fontColor = data.themes[themeChoice].textColor;
}
function startTransformation() {
  // sets message to include user input
  let message = "Happy Birthday <br>" + textField.value() + "!!!";
  // uses html() to modify content of DOM element
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
