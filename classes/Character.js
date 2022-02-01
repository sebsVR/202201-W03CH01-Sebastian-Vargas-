export class Character {
    constructor(name, family, age, status) {
        (this.name = name),
            (this.family = family),
            (this.age = age),
            (this.state = status);
    }
    communicate() {
        return this.sentence;
    }
    dies() {
        this.status = 'dead';
    }
}

Character.prototype.series = 'GoT';
