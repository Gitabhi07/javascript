let myName = "qwerty      ";
let myChannel = "heyabhi   ";

// console.log(myName.trueLength);

let muHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`spiderman power: ${this.spiderman}`);
  },
};

Object.prototype.qwerty = function () {
  console.log(`qwerty is present in all objects`);
};
heroPower.qwerty();
muHeros.qwerty();
myChannel.qwerty();

// Inhertence prototype

const Teacher = {
  makeVideo: true,
};

const TeachingSuport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,
  __proto__: TeachingSuport,
};

// morden syntax

Object.setPrototypeOf(TeachingSuport, Teacher);

let anotherUsename = "chai aur code      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.split(" ")}`);
};

anotherUsename.trueLength();
