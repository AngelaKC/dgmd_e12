let canvasSize = 600;
let ticCount = 0;  // tracks total clicks
let startLoc = 20;
let lx1 = startLoc;
let ly1 = startLoc;
let lx2 = startLoc;
let ly2 = startLoc * 2 + 5;
let fiveStart = startLoc;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  canvas.mousePressed(checkLoc); // calls checkLoc function when mouse is pressed
  drawBG(); // draws background
}
function draw() {}
function drawBG() {
  background(59, 43, 68); // purple
  stroke(255);
  strokeWeight(4);
}
// writes tic marks
function writeTic(spacer) { // spacer is offset value passed from checkLoc
  lx1 += spacer; // adds spacer to x value
  lx2 += spacer; // adds spacer to x value
  ticCount++; // increments tic count
  five = lx1 - 5 * spacer; // tracks location for crossing 4 tics with the 5th

  if (ticCount % 5 == 0) { // crosses 4 tics
    line(lx1, ly1, five, ly2);
  } else { // regular tic marks
    line(lx1, ly1, lx2, ly2);
  }
  // tests if there is not room for group of 5 tics
  if (ticCount % 5 == 0 && lx1 > canvasSize - 75) {
    lx1 = startLoc; // resets starting x value
    lx2 = startLoc; // resets starting x value
    ly1 += 50; // moves tic marks down to next line
    ly2 += 50; // moves tic marks down to next line
  }
}
// Tests if tics are getting close to the edge
function checkLoc() {
  let offset = 10; // controls
  if (ly1 >= canvasSize - 30) { // tests if there is room for another row of tics
    // set text properties and print to canvas
    textSize(20);
    textAlign(CENTER);
    fill(255);
    noStroke();
    text("Full - Total Count: " + ticCount, canvasSize / 2, ly1 + 5);
  } else { // else continue to print ticks
    if (ticCount % 5 == 0) { // tests if total is divisible by 5
      offset = 25;  // add extra space between tics
    }
    writeTic(offset); // calls writeTic function and passes offset #
  }
}
// if ESCAPE key is pressed, clear canvas
function keyPressed() {
  if (ESCAPE) {
    clear(); // clears canvas
    drawBG(); // redraws background
    // resets starting locations
    lx1 = startLoc; 
    ly1 = startLoc;
    lx2 = startLoc;
    ly2 = startLoc * 2 + 5;
    ticCount = 0; // resets ticCount
  }
}
