let pom, choice;
let slider, radio;
let fruit = [];
let img;

function setup() {
  canvas=createCanvas(600, 625);
  canvas.parent("sketch-holder")
  slider = createSlider(20, 75, 50);
  slider.position(250, 15);
  slider.style('width', '80px');  
  radio = createRadio();
  radio.option(0, 'apple');
  radio.option(1, 'pineapple');
  radio.option(2, 'strawberry');
  radio.style('width', '300px');
  radio.selected('0');
  radio.parent("radio");
  imageMode(CENTER);
}

function draw() {
  background(220);
  text("Change Pom Size: " , 20, 25);
  pom = slider.value();
  choice = radio.value();
  drawMe();
  img = fruit[choice];

  for(let i = 0; i<10;i++){
    image(img,(100 + i*45),500);
  }


}

//preload runs before the sketch starts, and loads assets!
function preload() {
  fruit[0] = loadImage('images/apple.png');
  fruit[1] = loadImage('images/pineapple.png');
  fruit[2] = loadImage('images/strawberry.png');
}

function drawMe(){
  textStyle(normal);
  textSize(24);
  fill(250, 235, 205);
  ellipse(300, 300, 150, 200);

  // glasses top
  line(245, 280, 355, 280);
  // left eye
  ellipse();
  ellipseMode(RADIUS);
  fill(250, 235, 205);
  ellipse(275, 300, 20, 18); // Outer glasses
  ellipseMode(CENTER);
  fill(255);
  ellipse(275, 300, 22, 8); // outer eyeball
  ellipseMode(CENTER);
  fill(47, 79, 79);
  ellipse(275, 300, 3, 3); // Inner eyeball
  // right eye
  ellipseMode(RADIUS);
  fill(250, 235, 205);
  ellipse(325, 300, 20, 18); // Outer glasses
  ellipseMode(CENTER);
  fill(255);
  ellipse(325, 300, 22, 8); // outer eyeball
  ellipseMode(CENTER);
  fill(47, 79, 79);
  ellipse(325, 300, 3, 3); // Inner eyeball
  // nose
  fill(250, 235, 205);
  triangle(300, 290, 295, 330, 305, 330);
  //mouth
  noFill();
  beginShape();
  vertex(280, 350);
  vertex(325, 350);
  vertex(330, 348);
  endShape();
  // hair left
  fill(169, 169, 169);
  beginShape(TRIANGLES);
  vertex(210, 375);
  vertex(230, 255);
  vertex(240, 375);
  endShape();
  // hair right
  beginShape(TRIANGLES);
  vertex(360, 375);
  vertex(370, 255);
  vertex(390, 375);
  endShape();
  // hat
  fill(59, 43, 68);
  beginShape(TRIANGLES);
  vertex(215, 275);
  vertex(390, 275);
  vertex(300, 155);
  endShape();
  ellipse(300, 155, pom, pom);
}


