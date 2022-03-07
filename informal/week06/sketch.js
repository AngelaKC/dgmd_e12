let canvasWidth = 700;
let canvasHeight = 600;
let x, y;
let h = 200;
let w = 100;
let win = 0;
let total = 0;
let box1, box2, box3;
let myColors = [
  "rgb(59, 43, 68)", // purple - 0
  "rgb(250,70,100)", // pink - 1
  "rgb(36,80,214)", // blue - 2
  "rgb(53, 153, 146)", // teal - 3
  "rgb(111, 219, 210)", // light teal - 4
];
let arrayItem = 0;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // Move the canvas so it’s inside <section id="sketch-holder">.
  canvas.parent("sketch-holder");
  noStroke();
  noLoop();
}

function draw() {
  background(255);
  drawBoxes();
  // checks if ESCAPE key was pressed
  if (keyPressed()) {
    drawBoxes();
  }
}
function drawBoxes() {
  clear();
  // increments each time game is played
  total++;

  // chooses random color from myColors array
  arrayItem = round(random(0, 4));
  box1 = new Box(200, 150, w, h, myColors[arrayItem]);
  box1.display();

  // chooses random color from myColors array
  arrayItem = round(random(0, 4));
  box2 = new Box(400, 150, w, h, myColors[arrayItem]);
  box2.display();

  // chooses random color from myColors array
  arrayItem = round(random(0, 4));
  box3 = new Box(600, 150, w, h, myColors[arrayItem]);
  box3.display();
  
  // Sets text size and checks for jackpot!
  textSize(32);
  if (box1.jackpot(box2, box3)) {
    fill(255, 0, 0);
    text("You Win!", 382, 400);
    // increments win counter
    win++;
  } else {
    fill(0);
    text("Try Again!", 380, 400);
  }
  // changes font to black
  fill(0);
  // changes to smaller text size
  textSize(12);
  // gives instructions to continue play
  text("Press ESCAPE key to play again", 365, 425);
  // displays stats
  text("You have won " + win + " out of " + total, 390, 440);
}
function keyPressed() {
  if (keyCode === ESCAPE) {
    drawBoxes();
  }
}
