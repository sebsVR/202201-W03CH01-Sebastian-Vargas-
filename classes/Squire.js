class Squire extends Character {
  constructor(name, family, age, status = "alive", patron, servitude) {
    super(name, family, age, status);
    this.patron = patron;
    this.servitude = servitude;
    this.message = "No sé por que...";
  }
}
