let canvasSize = 200;
let ticCount = 0;
startLoc = 20;
let lx1 = startLoc;
let ly1 = startLoc;
let lx2 = startLoc;
let ly2 = startLoc * 2 + 5;
let fiveStart = startLoc;

function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("sketch-holder");
  canvas.mousePressed(checkLoc);
  drawBG();
}
function draw() {}
function drawBG() {
  background(59, 43, 68); // purple
  stroke(255);
  strokeWeight(4);
}
function writeTic(spacer) {
  lx1 += spacer;
  lx2 += spacer;
  ticCount++;
  five = lx1 - 5 * spacer;

  if (ticCount % 5 == 0) {
    line(five, ly1, lx2, ly2);
  } else {
    line(lx1, ly1, lx2, ly2);
  }
  if (ticCount % 5 == 0 && lx1 > canvasSize - 75) {
    lx1 = startLoc;
    lx2 = startLoc;
    ly1 += 50;
    ly2 += 50;
  }
}

function checkLoc() {
  let offset = 10;
  if (ly1 >= canvasSize - 30) {
    textSize(20);
    textAlign(CENTER);
    fill(255);
    noStroke();
    text("Full - Total Count: " + ticCount, canvasSize / 2, ly1 + 5);
  } else {
    if (ticCount % 5 == 0) {
      offset = 25;
    }
    writeTic(offset);
  }
}
function keyPressed() {
  if (ESCAPE) {
    clear();
    drawBG();
    lx1 = startLoc;
    ly1 = startLoc;
    lx2 = startLoc;
    ly2 = startLoc * 2 + 5;
    ticCount = 0;
  }
}
