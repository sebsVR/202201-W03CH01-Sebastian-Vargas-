class Knight extends Character {
  constructor(name, family, age, status = "alive", weapon, skills) {
    super(name, family, age, status);
    this.weapon = weapon;
    this.skills = skills;
    this.message = "Primero pego y luego pregunto!";
  }
}
