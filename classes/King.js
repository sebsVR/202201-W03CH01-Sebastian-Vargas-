class King extends Character {
  constructor(name, family, age, status = "alive", reigningYears) {
    super(name, family, age, status);
    this.reigningYears = reigningYears;
    this.message = "You will die!";
  }
}
