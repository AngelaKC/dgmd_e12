let canvasWidth = 1000;
let canvasHeight = 500;
let myColors = [
  "rgb(255, 190, 11)", // 0
  "rgb(251, 86, 7)", // 1
  "rgb(255, 0, 110)", // 2
  "rgb(131, 56, 236)", // 3
  "rgb(58, 134, 255)", // 4
];
let myMessages = [
  "Yes!", // 0
  "Absolutely", // 1
  "Definitely", // 2
  "Trust me, you don't want to know.", // 3
  "Meh", // 4
  "Probably", // 5
  "No.", // 6
  "Don't bet on it.", // 7
];
let clickToggle = false;
function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // Move the canvas so it’s inside <section id="sketch-holder">.
  canvas.parent("sketch-holder");
  noStroke();
  background(255);
  responseMsg = myMessages[round(random(0, 7))];
  canvas.mouseClicked(toggler); // only fires when user clicks on canvas
  textFont("Helvetica");
  textAlign(CENTER);
  writeInst();
}

function draw() {
  writeText();
  let newCircleSize = map(mouseX,0,canvasWidth,1,200);
  if (clickToggle) {
    noStroke()
    fill(myColors[round(random(0, 4))]);
    MyCircle.display();
    randomSize = myCircle.change(
      round(random(0, canvasWidth)),
      round(random(0, canvasHeight)),
      newCircleSize
    );
  }
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
function writeText() {
  fill(255);
  textSize(75);
  text(responseMsg, 0, 150, canvasWidth, canvasHeight);
}
function writeInst() {
  textSize(50);
  text(
    "Ask the Magic Canvas your question.",
    0,
    0,
    canvasWidth,
    canvasHeight
  );
}
function keyPressed() {
  if (ESCAPE) {
    clear();
    responseMsg = myMessages[round(random(0, 7))];
    fill(0);
    writeInst();
  }
}
