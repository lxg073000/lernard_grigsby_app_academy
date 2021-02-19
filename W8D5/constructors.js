function Cat() {
  this.name = "Fluff";
  this.age = 3;
}

function Dog() {
  this.name = "Scruff";
  this.age = 9;
}

Dog.prototype.chase = function (cat) {
  console.log(
    `${this.name} is chasing ${cat.name} cause that's what ${this.constructor.name}s gon do.`
  );
};

const Fluff = new Cat();
const Scruff = new Dog();
