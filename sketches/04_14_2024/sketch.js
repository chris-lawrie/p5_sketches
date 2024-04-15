// Chris Lawrie | April 14th 2024
// A ball bouncing around a box with gravity

var ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width / 2, 60, 20, width, height);
}

function draw() {
  background(255);

  fill(255);
  stroke(200);
  strokeWeight(5);
  square(0, 0, width, 20);

  ball.update();
  ball.display();
}
