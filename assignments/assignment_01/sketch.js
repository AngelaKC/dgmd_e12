// the initial rotation speed for the windmills
let millSpeedy = 0;
let millSpeedx = 0;

function setup() {
  createCanvas(1024, 768);
}
//59,43,68 -- purple

// function draw() {
//   background(220);
//   windmill(6, millSpeedx, "x", "rgb(59,43,68)", "rgb(97, 139, 74)");
//   windmill(2, millSpeedy, "y", "rgb(154, 140, 152)", "rgb(124, 165, 184)");
//   // adjust speed of windmills bases on mouse moving accross x and y axis
//   millSpeedx += 5 + map(mouseX, 0, windowWidth, -10, 10);
//   millSpeedy += 5 + map(mouseY, 0, windowHeight, -10, 10);
// }

// function windmill(loc, sp, ax, baseColor, bladeColor) {
//   // windmill 1
//   push();
//   // move the origin to the left of the canvas
//   translate(windowWidth / loc, windowHeight / loc);
//   // windmill base
//   fill(baseColor);
//   beginShape();
//   vertex(-15, -15);
//   vertex(-50, 200);
//   vertex(50, 200);
//   vertex(15, -15);
//   endShape(CLOSE);
//   fill(0); // black text
//   text("Speed controlled by " + ax + "-axis", -75, 220);

//   // windmill blades
//   fill(bladeColor);
//   rotate(radians(sp));
//   triangle(0, 0, 100, 50, 50, 100);
//   triangle(0, 0, -100, -50, -50, -100);
//   triangle(0, 0, -100, 50, -50, 100);
//   triangle(0, 0, 100, -50, 50, -100);

//   ellipse(0, 0, 30);
//   pop();
// }