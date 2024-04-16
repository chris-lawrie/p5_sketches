class Ball {
  constructor(x, y, fill_colour, ball_radius, width, height, boundary_radius) {
    this.ball_radius = ball_radius;
    this.fill_colour = fill_colour;

    this.position = createVector(x, y);
    this.velocity = createVector(random(-10, 10), random(-10, 10));
    this.circle_center = createVector(width / 2, height / 2);
    this.boundary_radius = boundary_radius;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.y += 0.2;

    let dist_to_center = this.position.dist(this.circle_center);
    if (dist_to_center - 2 * this.ball_radius >= this.boundary_radius) {
      let angle = this.position.sub(this.circle_center).heading();
      console.log(angle);
      // this.velocity.x = -this.velocity.cos(angle);
      // this.velocity.y = -this.velocity.sin(angle);
      this.position.x = 100;
      this.position.y = 100;
    }
  }

  display() {
    fill(this.fill_colour);
    stroke(this.fill_colour);
    strokeWeight(0);
    ellipse(this.position.x, this.position.y, this.ball_radius * 2);
  }
}
