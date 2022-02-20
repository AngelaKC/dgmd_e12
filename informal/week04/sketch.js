let myColors = [
  "rgba(78, 154, 186, 0.9)", // blue green - 0
  "rgba(148, 101, 154, 0.9)", // french lilac - 1
  "rgba(191, 44, 61, 0.9)", // cardinal - 2
  "rgba(214, 108, 185, 0.9)", // sky magenta- 3
  "rgba(131, 61, 98, 0.9)", // twilight lavender - 4
  "rgba(161, 229, 171, 0.9)", // green  - 5
  "rgba(1255, 212, 0, 0.9)", // yellow  - 6
  
];
let clickToggle = false; // controls transformation
let canvasWidth = 1000;
let canvasHeight = 750;
let circleSize = 5;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.mouseClicked(toggler); // only fires when user clicks on canvas
  background(240);
}

function draw() {
  noStroke();
  if (clickToggle) {
    for (let x = circleSize; x <= canvasWidth - circleSize; x += circleSize){
      for (let y = circleSize; y <= canvasHeight -circleSize; y += circleSize){
        for (let d = 0; d <= circleSize; d += circleSize){
          fill(myColors[round(random(0,6))]);
          ellipse(x, y, d);
        }
        // Add a slash through the ellipses for the hell of it
        line(x-20, y-20, x+20, y+20);
      }
  }
}
}

// this function sets the clickToggle variable when mouse is clicked
function toggler() {
  if (clickToggle) {
    // if value is true change to false
    clickToggle = false;
  } else {
    // else value is false and change to true
    clickToggle = true;
  }
}
