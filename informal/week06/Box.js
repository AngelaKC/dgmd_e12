function Box(newX, newY, newW, newH, newC) {
  // Properties of the Box object
  this.xValue = newX;
  this.yValue = newY;
  this.width = newW;
  this.height = newH;
  this.color = newC;

  //Methods of Box object
  this.display = function () {
      // draw the box object
    fill(this.color);
    rect(this.xValue, this.yValue, this.width, this.height);
  };

  this.jackpot = function (other1, other2) {
      // test if all boxes are same color
    if (this.color == other1.color && this.color == other2.color) {
      return true;
    } else {
      return false;
    }
  };
}
