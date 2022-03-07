let MyCircle = {
    // circle properties
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    circleSize: 5,
  
    // METHODS of circle object
    change: function (newX, newY, newSize) {
      // pass in values to change location and size
      this.x = newX;
      this.y = newY;
      this.circleSize = newSize;
  
      // constrain() is a P5 function that limits the range of a var
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    },
  
    display: function () {
      // draw the circle with at the current location and size
      ellipse(this.x, this.y, this.circleSize, this.circleSize * 3);
    },
  };