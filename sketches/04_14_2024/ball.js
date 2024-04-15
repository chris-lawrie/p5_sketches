class Ball {
  constructor(x, y, radius, width, height) {
    this.radius = radius;
    this.position_x = x;
    this.position_y = y;
    this.velocity_x = random(-5, 5);
    this.velocity_y = random(-5, 5);
    this.width = width;
    this.height = height;
  }

  update() {
    this.position_x += this.velocity_x;
    this.position_y += this.velocity_y;
    this.velocity_y += 0.2;
    if (
      this.position_x + this.radius >= this.width ||
      this.position_x - this.radius <= 0
    ) {
      this.velocity_x *= -0.95;
    }
    if (this.position_y + this.radius >= this.height) {
      this.velocity_y *= -0.95;
    }
  }

  display() {
    fill(0);
    stroke(0);
    strokeWeight(5);
    ellipse(this.position_x, this.position_y, this.radius * 2);
  }
}
