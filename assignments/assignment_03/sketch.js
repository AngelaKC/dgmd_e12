/* Color array */
let myColors = [
  "rgb(255, 190, 11)", // 0
  "rgb(251, 86, 7)", // 1
  "rgb(255, 0, 110)", // 2
  "rgb(131, 56, 236)", // 3
  "rgb(58, 134, 255)", // 4
];
let canvasHeight = 500;
let canvasWidth = 700;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  // Move the canvas so it’s inside <section id="sketch-holder">.
  canvas.parent("sketch-holder");
  drawBase(); // draws base image
}

function draw() {

}
function drawBase(){
  background(244);
}
