let canvasWidth = 1000;
let canvasHeight = 750;
let circleSize = 80;
let count = 0;


function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  background("rgba(59, 43, 68,0.7)");
  textStyle(BOLD);
  textSize(16);
  noStroke();
  noLoop();
}

function draw() {

    for (let x = circleSize; x <= canvasWidth - circleSize; x += circleSize) {
      for (
        let y = circleSize;
        y <= canvasHeight - circleSize;
        y += circleSize
      ) {
        count++;
        for (let d = 0; d <= circleSize; d += circleSize) {
          ellipse(x, y, d);

        }
         text(count,x-5,y);
      }
    }
}
