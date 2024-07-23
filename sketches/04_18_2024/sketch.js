// Chris Lawrie | April 18th 2024
// Balls flash when they collide

let balls = [];

function random_color() {
  return color(random(150, 255), random(150, 255), random(150, 255), 200);
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 3; i++) {
    let x = random(100, 300);
    let y = random(100, 200);
    let radius = random(30, 50);
    let fill_colour = random_color();
    balls.push(new Ball(x, y, fill_colour, radius, width, height, 380 / 2));
  }
}

function draw() {
  background(255);

  fill(255);
  stroke(200);
  strokeWeight(5);
  ellipse(width / 2, height / 2, 380);

  // Check for collisions
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();

    for (let j = 0; j < balls.length; j++) {
      // don't check against self & don't check the same comparison twice
      if ((i === j) | (i > j)) {
        continue;
      }
      distance = dist(
        balls[i].position.x,
        balls[i].position.y,
        balls[j].position.x,
        balls[j].position.y,
      );
      if (distance <= balls[i].ball_radius + balls[j].ball_radius) {
        balls[i].fill_colour = random_color();
        balls[j].fill_colour = random_color();
      }
    }
  }
}
