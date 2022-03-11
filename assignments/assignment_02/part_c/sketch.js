let canvasSize = 800;
let ticCount = 0;
startLoc = 20;
let lx1 = startLoc;
let ly1 = startLoc;
let lx2 = startLoc;
let ly2 = 45;
let fiveStart = startLoc;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  background(59, 43, 68); // purple
  stroke(255);
  strokeWeight(4);
  canvas.mousePressed();
}

function draw() {}
function writeTic(spacer) {
  lx1 += spacer;
  lx2 += spacer;
  ticCount++;
  five = lx1 - 5 * spacer;
  // text(ticCount, 200,200);
  // text(ticCount%5, 200, 220);
  // text(five, 200, 240);
  if (ticCount % 5 == 0) {
    line(five, ly1, lx2, ly2);
    // text("mod 5 is true!", 200, 260);
  } else {
    line(lx1, ly1, lx2, ly2);
    // text("mod 5 is false!", 200, 280);
  }
  if (ticCount % 5 == 0 && lx1 > canvasSize - 60) {
    lx1 = startLoc;
    lx2 = startLoc;
    ly1 += 50;
    ly2 += 50;
    text("second if", 100, 100);
  }
}

function mousePressed() {
  let offset = 10;
  writeTic(offset);
}
