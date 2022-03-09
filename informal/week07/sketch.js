// Week 6 - Array of "Aware" Objects
// refactoring code from Week 6

// an array to contain all the walker objects
let walkers = [];
// the number of objects we want in our array
let numWalkers = 20;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
    for (let i = 0; i < numWalkers; i++) {
      walkers[i] = new Walker();
    }
}

function draw() {
  // draw canvas background
  background(183, 215, 216);

  // move the walker around the screen
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].move();
    walkers[i].display();

    // now check every other object in the array against this one!
    for (let j = 0; j < walkers.length; j++) {
      // if not the same object AND are intersecting, go!
      if (i != j && walkers[i].touching(walkers[j])) {
        walkers[i].changeColor();
        walkers[j].changeColor();
      }
    }
  }
}
function touching(x, y, r) {
  if (dist(x, y, mouseX, mouseY) < r) {
    return true;
  } else {
    return false;
  }
}
function mouseClicked() {
  for(var i = 0; i < walkers.length; i++) {
    if(touching(walkers[i].x, walkers[i].y, walkers[i].r)) {
      walkers[i].resize(walkers[i].circleSize * 1.5);
    }
  }
}
