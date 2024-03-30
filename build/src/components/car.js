class Car {
  constructor(x, y, width, height, {acceleration = 0, breaking = 0, topspeed = 0, model = ""} = {}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.specs = {acceleration, topSpeed: topspeed, breaking};
    this.unit = {velocity: 0, friction: 0.05};
    this.controls = new Controls();
    this.img = new Image();
    this.img.src = model;
  }
  drive() {
    if (this.controls.forwards) {
      this.unit.velocity += this.specs.acceleration;
    }
    if (this.controls.backwards) {
      this.unit.velocity -= this.specs.acceleration;
    }
    if (this.controls.break) {
      this.unit.friction = this.specs.breaking;
    }
    if (!this.controls.break) {
      this.unit.friction = 0.05;
    }
    if (this.unit.velocity > this.specs.topSpeed) {
      this.unit.velocity = this.specs.topSpeed;
    }
    if (this.unit.velocity < -this.specs.topSpeed / 2) {
      this.unit.velocity = -this.specs.topSpeed / 2;
    }
    if (this.unit.velocity > 0) {
      this.unit.velocity -= this.unit.friction;
    }
    if (this.unit.velocity < 0) {
      this.unit.velocity += this.unit.friction;
    }
    if (Math.abs(this.unit.velocity) < this.unit.friction) {
      this.unit.velocity = 0;
    }
    if (this.unit.velocity != 0) {
      const flip = this.unit.velocity > 1 ? 1 : this.unit.velocity < -1 ? -1 : 0;
      if (this.controls.left) {
        this.angle += 0.02 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.02 * flip;
      }
    }
    this.x -= Math.sin(this.angle) * this.unit.velocity;
    this.y -= Math.cos(this.angle) * this.unit.velocity;
    console.log("x = ", this.x);
    console.log("y = ", this.y);
    console.log("angle = ", this.angle);
    console.log("velocity = ", this.unit.velocity);
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);
    ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}
