// Chris Lawrie | April 17th 2024
// Multiple balls bouncing around a cricle!

let balls = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    let x = random(100, 300);
    let y = random(100, 200);
    let radius = random(10, 30);
    let fill_colour = color(
      random(150, 255),
      random(150, 255),
      random(150, 255),
      200
    );
    balls.push(new Ball(x, y, fill_colour, radius, width, height, 380 / 2));
  }
}

function draw() {
  background(255);

  fill(255);
  stroke(200);
  strokeWeight(5);
  ellipse(width / 2, height / 2, 380);

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}
