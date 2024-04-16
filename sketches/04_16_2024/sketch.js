// Chris Lawrie | April 16th 2024
// A ball bouncing inside a circle

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width / 2, 20, 0, 20, width, height, 380);
}

function draw() {
  background(255);

  fill(255);
  stroke(200);
  strokeWeight(5);
  ellipse(width / 2, height / 2, 380);

  ball.update();
  ball.display();
}
