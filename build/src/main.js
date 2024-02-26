const fields = document.getElementById("drive-field");
const ctx = fields.getContext("2d");
fields.height = window.innerHeight - 170;
fields.width = window.innerWidth - 100;
const mercedes = new Car(fields.width / 2, fields.height / 1.1, 50, 100, {
  topspeed: 6.5,
  acceleration: 0.3,
  breaking: 0.3,
  model: "/assets/mercedes.png"
});
const police1 = new Car(fields.width / 2 - 100, fields.height / 1.1, 50, 100, {
  topspeed: 7,
  acceleration: 0.28,
  breaking: 0.3,
  model: "/assets/police1.png"
});
const ford = new Car(fields.width / 2 + 100, fields.height / 1.1, 50, 100, {
  topspeed: 8,
  acceleration: 0.25,
  breaking: 0.25,
  model: "/assets/ford.png"
});
const animateField = () => {
  mercedes.drive();
  fields.height = window.innerHeight - 170;
  mercedes.draw(ctx);
  police1.draw(ctx);
  ford.draw(ctx);
  requestAnimationFrame(animateField);
};
animateField();
