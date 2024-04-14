// Chris Lawrie | April 14th 2024
// A ball bouncing around a box with gravity

// import Ball from "ball.js";

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
    this.velocityY += 0.2;

    if (
      this.position_x + this.radius >= width ||
      this.position_x - this.radius <= 0
    ) {
      this.velocityX *= -0.95;
    }
    if (
      this.position_y + this.radius >=
      height // ||
      //   this.position_y - this.radius <= 0
    ) {
      this.velocityY *= -0.95;
    }
  }

  display() {
    fill(0);
    ellipse(this.position_x, this.position_y, this.radius * 2);
  }
}

let ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width / 2, 60, 20);
}

function draw() {
  background(100);
  ball.update();
  ball.display();

  fill(0);
  ellipse(this.x, this.y, this.radius * 2);
}
