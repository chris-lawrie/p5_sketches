// Chris Lawrie | April 15th 2024
// Multiple balls bouncing around a box with gravity!

let balls = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(10, 30);
    let fill_colour = color(
      random(150, 255),
      random(150, 255),
      random(150, 255),
      200,
    );
    balls.push(new Ball(x, y, fill_colour, radius, width, height));
  }
}

function draw() {
  background(255);

  fill(255);
  stroke(200);
  strokeWeight(5);
  square(0, 0, width, 20);

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}
