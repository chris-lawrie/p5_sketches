// Chris Lawrie | April 18th 2024
// Balls are aware that they have collided

let balls = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 3; i++) {
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

  // Check for collisions
  for (let i = 0; i < balls.length; i++) {
    for (let j = 0; j < balls.length; j++) {
      if ((i = j | (i > j))) {
        continue;
      }
      dist = dist(
        balls[i].position.x,
        balls[i].position.y,
        balls[j].position.x,
        balls[j].position.y
      );
      console.log(dist);

      if (dist <= balls[i].radius + balls[j]) {
        // do something...
        console.log("WOAAHHH!");
      }
    }
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}
