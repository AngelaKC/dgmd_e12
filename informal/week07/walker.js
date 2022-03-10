function Walker() {
  // attributes of the walker object
  this.x = random(width);
  this.y = random(height);

  this.col = color(255);

  this.circleSize = 100;
  // divide circleSize by two to store radius
  this.r = this.circleSize / 2;

  this.circleSpeed = 1;

  // methods of the walker object

  this.changeColor = function () {
    this.col = color(random(255), random(255), random(255));
  };

  this.display = function () {
    // draw the circle with at the current location and size
    fill(this.col);
    ellipse(this.x, this.y, this.circleSize, this.circleSize);
  };

  this.move = function () {
    // each frame, randomly move X and Y position
    // anywhere between -circleSpeed and CircleSpeed
    this.x += round(random(-this.circleSpeed, this.circleSpeed));
    this.y += round(random(-this.circleSpeed, this.circleSpeed));

    // constrain() is a P5 function that limits the range of a var
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };

  this.touching = function (other) {
    var d = dist(this.x, this.y, other.x, other.y);

    // if the distance is less than the two radii combined,
    // then the circles are touching
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };

  this.resize = function (){
    this.circleSize = this.circleSize * 1.5;
    // reset radius to ensure touching still works
    this.r = this.circleSize/2;
  }

}
