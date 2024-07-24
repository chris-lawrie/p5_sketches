// Chris Lawrie | April 23 2024
// Balls bounce off eachother upon colliding

let balls = [];

function random_color() {
  return color(random(150, 255), random(150, 255), random(150, 255), 200);
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(100, 300);
    let y = random(100, 200);
    let radius = random(10, 10);
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

    // don't check against self & don't check the same comparison twice
    for (let j = i + 1; j < balls.length; j++) {
      distance = dist(
        balls[i].position.x,
        balls[i].position.y,
        balls[j].position.x,
        balls[j].position.y
      );

      if (distance <= balls[i].ball_radius + balls[j].ball_radius) {
        // correct ball positions incase radii overlap
        let overlap = distance - (balls[i].ball_radius + balls[j].ball_radius);
        let impact_vector = p5.Vector.sub(balls[j].position, balls[i].position);
        impact_vector.setMag(distance);
        let dir = impact_vector.copy();
        dir.setMag(overlap * 0.5);
        balls[i].position.add(dir);
        balls[j].position.sub(dir);

        // calculate new velocities assuming elastic collisions
        let tot_mass = balls[i].mass + balls[j].mass;
        let velocity_diff = p5.Vector.sub(
          balls[j].velocity,
          balls[i].veclocity
        );

        let numerator = velocity_diff.dot(impact_vector);
        let denomenator = tot_mass * distance * distance;

        let delta_velocity_i = impact_vector.copy();
        delta_velocity_i.mult((2 * balls[j].mass * numerator) / denomenator);
        balls[i].velocity.add(delta_velocity_i);

        let delta_velocity_j = impact_vector.copy();
        delta_velocity_j.mult((-2 * balls[i].mass * numerator) / denomenator);
        balls[j].velocity.add(delta_velocity_j);
      }
    }
  }
}
