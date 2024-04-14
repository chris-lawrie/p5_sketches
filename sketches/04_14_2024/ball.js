class Ball {
  constructor(x, y, radius) {
    this.radius = radius;
    this.position_x = x;
    this.position_y = y;
    this.velocityX = random(-5, 5); // Initial random velocity
    this.velocityY = random(-5, 5); // Initial random velocity
  }

  update() {
    this.position_x += this.velocityX;
    this.position_y += this.velocityY;
    this.velocityY += 0.1;

    if (
      this.position_x + this.radius >= width ||
      this.position_x - this.radius <= 0
    ) {
      this.velocityX *= -1;
    }
    if (
      this.position_y + this.radius >= height ||
      this.position_x - this.radius <= 0
    ) {
      this.velocityY *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, this.radius * 2);
  }
}
