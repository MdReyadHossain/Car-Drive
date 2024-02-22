class Car {
  constructor(x, y, width, height, {topspeed = 0} = {}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.meter = {acceleration: 0.2, velocity: 0, friction: 0.05, topSpeed: topspeed};
    this.controls = new Controls();
    this.img = new Image();
    this.img.src = "/assets/bmw.png";
  }
  drive() {
    if (this.controls.forwards) {
      this.meter.velocity += this.meter.acceleration;
    }
    if (this.controls.backwards) {
      this.meter.velocity -= this.meter.acceleration;
    }
    if (this.meter.velocity > this.meter.topSpeed) {
      this.meter.velocity = this.meter.topSpeed;
    }
    if (this.meter.velocity < -this.meter.topSpeed / 2) {
      this.meter.velocity = -this.meter.topSpeed / 2;
    }
    if (this.meter.velocity > 0) {
      this.meter.velocity -= this.meter.friction;
    }
    if (this.meter.velocity < 0) {
      this.meter.velocity += this.meter.friction;
    }
    if (Math.abs(this.meter.velocity) < this.meter.friction) {
      this.meter.velocity = 0;
    }
    if (this.controls.left) {
      this.angle += 0.02;
    }
    if (this.controls.right) {
      this.angle -= 0.02;
    }
    this.y -= this.meter.velocity;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);
    ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}
