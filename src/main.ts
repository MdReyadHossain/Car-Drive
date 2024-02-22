const fields: HTMLCanvasElement = document.getElementById('drive-field') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = fields.getContext('2d')!;

fields.height = window.innerHeight - 150;
fields.width = window.innerWidth - 100;
const bmw = new Car(fields.width / 2, fields.height / 2, 50, 85, { topspeed: 5 });

const animateField = () => {
    bmw.drive();
    fields.height = window.innerHeight - 150;
    bmw.draw(ctx);
    requestAnimationFrame(animateField);
}

animateField();