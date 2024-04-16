class Ball {
  constructor(x, y, fill_colour, radius, width, height) {
    this.radius = radius;
    this.fill_colour = fill_colour;
    this.position_x = x;
    this.position_y = y;
    this.velocity_x = random(-10, 10);
    this.velocity_y = random(-10, 10);
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
      this.velocity_x *= -0.98;
    }
    if (this.position_y + this.radius >= this.height) {
      this.velocity_y *= -0.98;
    }
  }

  display() {
    fill(this.fill_colour);
    stroke(this.fill_colour);
    strokeWeight(0);
    ellipse(this.position_x, this.position_y, this.radius * 2);
  }
}
