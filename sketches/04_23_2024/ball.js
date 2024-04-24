var GRAVITY = 0.2;
var DENSITY = 1;

function angle(point_1, point_2) {
  var dx = point_1.x - point_2.x;
  var dy = point_1.y - point_2.y;
  return Math.atan2(dy, dx);
}

class Ball {
  constructor(x, y, fill_colour, ball_radius, width, height, boundary_radius) {
    this.fill_colour = fill_colour;

    this.ball_radius = ball_radius;
    this.mass = (4 / 3) * Math.PI * Math.pow(this.ball_radius, 3) * DENSITY;

    this.angle_rad = 0;
    this.position = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.momentum = this.velocity.copy().mult(this.mass);

    this.circle_center = createVector(width / 2, height / 2);
    this.boundary_radius = boundary_radius;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.y += GRAVITY;

    let dist_to_center = this.position.dist(this.circle_center);
    this.angle_rad = angle(this.position, this.circle_center);

    if (dist_to_center + this.ball_radius > this.boundary_radius) {
      this.frame_count = 0;
      this.velocity.y = -0.99 * this.velocity.mag() * Math.sin(this.angle_rad);
      this.velocity.x = -0.99 * this.velocity.mag() * Math.cos(this.angle_rad);
    }
  }

  display() {
    fill(this.fill_colour);
    stroke(this.fill_colour);
    strokeWeight(0);
    ellipse(this.position.x, this.position.y, this.ball_radius * 2);
  }
}
