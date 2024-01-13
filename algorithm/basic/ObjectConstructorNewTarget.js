function Developer(name, age) {
    if (!new.target) { return new Developer(name, age); }
    this.name = name;
    this.age = age;
    this.job = 'developer';
}

const jane = Developer('Jane', 32);

console.log(jane.name);