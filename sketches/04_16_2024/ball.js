function angle(point_1, point_2) {
  var dx = point_1.x - point_2.x;
  var dy = point_1.y - point_2.y;
  return Math.atan2(dy, dx);
}

class Ball {
  constructor(x, y, fill_colour, ball_radius, width, height, boundary_radius) {
    this.ball_radius = ball_radius;
    this.fill_colour = fill_colour;

    this.position = createVector(x, y);
    // this.velocity = createVector(random(-10, 10), random(-10, 10));
    this.velocity = createVector(5, 1);
    this.circle_center = createVector(width / 2, height / 2);
    this.boundary_radius = boundary_radius;

    this.angle_rad = 0;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.y += 0.2;

    let dist_to_center = this.position.dist(this.circle_center);

    this.angle_rad = angle(this.position, this.circle_center);
    console.log(this.angle_rad);

    if (dist_to_center + this.ball_radius > this.boundary_radius) {
      this.frame_count = 0;
      this.velocity.y = -this.velocity.y * Math.sin(this.angle_rad);
      this.velocity.x = -this.velocity.x * Math.cos(this.angle_rad);
    }
  }

  display() {
    fill(this.fill_colour);
    stroke(this.fill_colour);
    strokeWeight(0);
    ellipse(this.position.x, this.position.y, this.ball_radius * 2);
  }
}
