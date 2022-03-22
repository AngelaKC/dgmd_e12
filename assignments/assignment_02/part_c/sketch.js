let canvasSize = 600;
let startLoc = 20;
let lx1, ly1, lx2, ly2, fiveStart; // tic variables
let ticCount;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  // calls checkLoc function when mouse is pressed on canvas
  canvas.mousePressed(checkLoc); 
  // sets canvas look and feel
  background(59, 43, 68); // purple
  stroke(255); // white
  strokeWeight(4);
  // sets initial values
  lx1 = ly1 = lx2 = fiveStart = startLoc;
  ly2 = startLoc * 2 + 5;
  ticCount = 0;
}
function draw() {}

// writes tic marks
function writeTic(spacer) {
  // spacer is offset value passed from checkLoc
  // changes x location
  lx1 += spacer; 
  lx2 += spacer; 
  ticCount++; // increments tic count
  five = lx1 - 5 * spacer; // tracks location for crossing 4 tics with the 5th

  if (ticCount % 5 == 0) {
    // crosses 4 tics
    line(lx1, ly1, five, ly2);
  } else {
    // regular tic marks
    line(lx1, ly1, lx2, ly2);
  }
  // tests if we are too close to right edge
  if (ticCount % 5 == 0 && lx1 > canvasSize - 75) {
    // resets x values
    lx1 = startLoc; 
    lx2 = startLoc; 
    // moves to next line
    ly1 += 50; 
    ly2 += 50; 
  }
}
// tests if we are too close to bottom edge
function checkLoc() {
  let offset = 10; // controls
  if (ly1 >= canvasSize - 30) {
    // tests if there is room for another row of tics
    // set text properties and print to canvas
    textSize(20);
    textAlign(CENTER);
    fill(255);
    noStroke();
    text("Full - Total Count: " + ticCount, canvasSize / 2, ly1 + 5);
  } else {
    // else continue to print ticks
    if (ticCount % 5 == 0) {
      // tests if total is divisible by 5
      offset = 25; // add extra space between tics
    }
    writeTic(offset); // calls writeTic function and passes offset #
  }
}
/* 
  if ESCAPE key is pressed, 
  rerun setup() to clear canvas 
  and reset variables 
*/
function keyPressed() {
  if (keyCode === ESCAPE) {
    setup();
  }
}
