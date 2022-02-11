//59,43,68 -- purple
let canvasHeight = 768;
let canvasWidth = 1024;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw(){
  background(59,43,68);
  fill(250,70,100);
  stroke(59,43,68);
  strokeWeight(3);
  rect(0,(canvasHeight/10),(canvasWidth/2),(canvasHeight/10*4));
  fill(36,80,214);
  rect(((canvasWidth/4)-15),0,(canvasWidth/12),(canvasHeight/4)*3);
  fill(53, 153, 146);
  rect(((canvasWidth/4)+70),((canvasHeight/4)*1.3),canvasWidth-((canvasWidth/4)+70),100);
  fill(111, 219, 210);
  rect(canvasWidth/4+70,((canvasHeight/4)*1.3)+100,((canvasWidth/4)-71),canvasHeight-((canvasHeight/4)*1.3)+100);
  fill(0,0,0,0);
  stroke(100,49,130);
  rect(canvasWidth/10,canvasHeight/10 + 20,(canvasWidth/10)*8,canvasHeight/10*7.6)
}