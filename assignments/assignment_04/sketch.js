// let canvasWidth = 1024;
// let canvasHeight = 768;
let canvasWidth = 800;
let canvasHeight = 1200;
let myBackgrounds = [];
let myConfetti = [];
let confetti;
let myImgUrls = [
  "images/astronaut.jpg", // 0
  "images/blueBricks.jpg", // 1
  "images/blueConfetti.jpg", // 2
  "images/candles.jpg", // 3
  "images/dinosaurParty.jpg", // 4
  "images/multiColorBalloons.jpg", // 5
  "images/neutralCake.jpg", // 6
  "images/paperPackages.jpg", // 7
  "images/pinkBalloons.jpg", // 8
  "images/pinkIcing.jpg", // 9
  "images/rainbowSprinkles.jpg", // 10
  "images/sharks.jpg", // 11
  "images/sprinkles.jpg", // 12
  "images/whiteCupcakes.jpg", // 13
];
let myPngUrls = [
  // "images/FinalProjectPngs/png_200pixels/balloon_200.png", // 0
  // "images/FinalProjectPngs/png_200pixels/barbie_200.png",  // 1
  // "images/FinalProjectPngs/png_200pixels/bunny_200.png",  // 2
  // "images/FinalProjectPngs/png_200pixels/cake_200.png",  // 3
  // "images/FinalProjectPngs/png_200pixels/dinosaurs_200.png",  // 4
  // "images/FinalProjectPngs/png_200pixels/dog_200.png",  // 5
  // "images/FinalProjectPngs/png_200pixels/elephant_200.png",  // 6
  // "images/FinalProjectPngs/png_200pixels/frog_200.png",  // 7
  // "images/FinalProjectPngs/png_200pixels/kitten_200.png",  // 8
  // "images/FinalProjectPngs/png_200pixels/mario_200.png",  // 9
  // "images/FinalProjectPngs/png_200pixels/partyHat_200.png",  // 10
  // "images/FinalProjectPngs/png_200pixels/powerpuff_200.png",  // 11
  "images/FinalProjectPngs/balloon.png", // 0
  // "images/FinalProjectPngs/barbie.png", // 1
  "images/FinalProjectPngs/bunny.png", // 2
  // "images/FinalProjectPngs/cake.png", // 3
  "images/FinalProjectPngs/dinosaur.png", // 4
  "images/FinalProjectPngs/dog.png", // 5
  "images/FinalProjectPngs/elephant.png", // 6
  "images/FinalProjectPngs/frog.png", // 7
  "images/FinalProjectPngs/kitten.png", // 8
  // "images/FinalProjectPngs/mario.png", // 9
  "images/FinalProjectPngs/partyHat.png", // 10
  "images/FinalProjectPngs/powerpuff.png", // 11
];
let textField, output, button;
let clickToggle = false;
let myBG;
// preload images
function preload() {
  for (let i = 0; i < myImgUrls.length; i++) {
    myBackgrounds[i] = loadImage(myImgUrls[i]);
  }
  for (let i = 0; i < myPngUrls.length; i++) {
    myConfetti[i] = loadImage(myPngUrls[i]);
  }
  myBG = loadImage("images/FinalProjectPngs/birthdayBG.png");

}
function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("sketch-holder");

  // var canvas = createCanvas(windowWidth, windowHeight);
  // positions the canvas and used z-index to
  // make it a back ground image
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  noStroke();
  // get user input
  textField = select("#name");
  textField = createInput();
  textField.position(145, 30);
  textField.parent("name");

  // // creating drop down options
  // sel = createSelect();
  // sel.position(10, 10);
  // sel.option("Select Theme", "100");
  // sel.option("Astronaut Cupcakes", "0");
  // sel.option("Blue Bricks", "1");
  // sel.option("Blue Confetti", "2");
  // sel.option("Birthday Candles", "3");
  // sel.option("Dinosaur Party", "4");
  // sel.option("Multi Color Balloons", "5");
  // sel.option("Cake", "6");
  // sel.option("Paper Packages", "7");
  // sel.option("Pink Balloons", "8");
  // sel.option("Pink Icing", "9");
  // sel.option("Rainbow Sprinkles", "10");
  // sel.option("Sharks", "11");
  // sel.option("Sprinkles", "12");
  // sel.option("White Cupcakes", "13");
  // sel.changed(mySelectEvent);
  // creating drop down options
  selPng = createSelect();
  selPng.position(10, 10);
  selPng.option("Select Theme", "100");
  selPng.option("Balloon", "0");
  selPng.option("Barbie", "1");
  selPng.option("Bunny", "2");
  selPng.option("Cake", "3");
  selPng.option("Dinosaurs", "4");
  selPng.option("Dog", "5");
  selPng.option("Elephant", "6");
  selPng.option("Frog", "7");
  selPng.option("Kitten", "8");
  selPng.option("Mario", "9");
  selPng.option("Party Hat", "10");
  selPng.option("Powerpuff Girls", "11");
  selPng.changed(myPngSelectEvent);

  // creating Button element
  output = select("#output");
  output.position(windowWidth / 4, windowHeight / 2);
  button = createButton("Start/Stop");
  // using position() to control location
  button.position(160, 135);
  // using parent()
  button.parent("input");
  // using element-specific event handler
  // and callback function
  button.mousePressed(startTransformation);
}

function draw() {
  // for (let i = 0; i < 1000; i++) {
  //   let x = round(random(0, canvasWidth));
  //   let y = round(random(0, canvasHeight));
  //   translate(x, y);

  // }
  image(myBG.resize(800,800),0,200);
}
function myPngSelectEvent() {
  // imageMode(CENTER);
  // image(myConfetti[selPng.value()].resize(25,0), 0, 0);

}
function mySelectEvent() {
  // imageMode(CENTER);
  image(myBackgrounds[sel.value()], 0, 0);
}
function startTransformation() {
  // sets message to include user input
  let message = "Happy Birthday " + textField.value() + "!!!";
  // uses html() to modify content of
  // DOM element
  output.html(message);
  // calls toggler() function
  toggler();
}
// this function sets the clickToggle variable when mouse is clicked
function toggler() {
  if (clickToggle) {
    // if value is true change to false
    clickToggle = false;
  } else {
    clear();
    // else value is false and change to true
    clickToggle = true;
  }
}
