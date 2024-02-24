class Car {
    x: number;
    y: number;
    width: number;
    height: number;
    unit: IUnit;
    controls: Controls;
    angle: number;
    img;
    constructor(x: number, y: number, width: number, height: number, { topspeed = 0 } = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.unit = { acceleration: 0.2, velocity: 0, friction: 0.05, topSpeed: topspeed };
        this.controls = new Controls();

        this.img = new Image();
        this.img.src = '/assets/bmw.png';
    }

    drive() {
        if (this.controls.forwards) {
            this.unit.velocity += this.unit.acceleration;
        }
        if (this.controls.backwards) {
            this.unit.velocity -= this.unit.acceleration;
        }

        if (this.controls.break) {
            this.unit.friction = 0.15;
        }
        if (!this.controls.break) {
            this.unit.friction = 0.05;
        }

        if (this.unit.velocity > this.unit.topSpeed) {
            this.unit.velocity = this.unit.topSpeed;
        }
        if (this.unit.velocity < -this.unit.topSpeed / 2) {
            this.unit.velocity = -this.unit.topSpeed / 2;
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

        if (this.controls.left) {
            this.angle += 0.02;
        }
        if (this.controls.right) {
            this.angle -= 0.02;
        }
        this.y -= this.unit.velocity;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);

        // ctx.beginPath();
        // ctx.translate(this.x, this.y);
        // ctx.rotate(-this.angle);
        // ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        // ctx.fillStyle = 'blue';
        // ctx.fill();

        ctx.restore();
    }
}