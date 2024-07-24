var GRAVITY = 0.2;

function angle(point_1, point_2) {
  var dx = point_1.x - point_2.x;
  var dy = point_1.y - point_2.y;
  return Math.atan2(dy, dx);
}

class Ball {
  constructor(x, y, fill_colour, ball_radius, width, height, boundary_radius) {
    this.position = createVector(x, y);
    this.ball_radius = ball_radius;
    this.mass = Math.PI * Math.pow(this.ball_radius, 2);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.momentum = this.velocity.copy().mult(this.mass);

    this.fill_colour = fill_colour;
    this.circle_center = createVector(width / 2, height / 2);
    this.boundary_radius = boundary_radius;
    this.angle_rad = 0;
  }

  update() {
    // this.velocity.y += GRAVITY;
    this.position.add(this.velocity);

    let dist_to_center = this.position.dist(this.circle_center);
    this.angle_rad = angle(this.position, this.circle_center);

    if (dist_to_center + this.ball_radius > this.boundary_radius) {
      // stop ball clipping thru boundary
      let overlap = this.boundary_radius - (dist_to_center + this.ball_radius);
      let correction_direction = p5.Vector.fromAngle(this.angleRad);
      correction_direction.setMag(overlap);
      this.position.sub(correction_direction);

      // bounce balls off boundary
      this.velocity.y = -this.velocity.mag() * Math.sin(this.angle_rad);
      this.velocity.x = -this.velocity.mag() * Math.cos(this.angle_rad);
    }
  }

  display() {
    fill(this.fill_colour);
    stroke(this.fill_colour);
    strokeWeight(0);
    ellipse(this.position.x, this.position.y, this.ball_radius * 2);
  }
}
