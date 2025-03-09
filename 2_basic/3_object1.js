// node 2_basic/3_object1.js

// Object
// JavaScript objects are containers for named values called properties or methods.

// singletons
// object literal

const objUser = {
  name: "John Doe",
  age: 30,
  email: "qwerty@gmail.com",
};

console.log(objUser);
console.log(objUser.name);
console.log(objUser.age);
console.log(objUser["email"]);

let mysym = Symbol("foo");
console.log(mysym);
console.log(typeof mysym);

// to use symbo in object...then use [] brackets to access the keyvalue pair
const objUser1 = {
  name: "John Doe",
  age: 30,
  [mysym]: "foo",
};

console.log(objUser1);
console.log(objUser1[mysym]);
// console.log(objUser1.name);
// console.log(typeof objUser1);
console.log(typeof objUser1[mysym]);

// frezee to make object immutable
const objUser2 = {
  name: "John Doe",
  age: 30,
};
// Object.freeze(objUser2);
// objUser2.name = "Jane Doe";
// console.log(objUser2);

// functiom in object

objUser2.greet = function () {
  console.log("Hello");
};
console.log(objUser2.greet()); // [Function (anonymous)]
// objUser2.greet(); // Hello

objUser2.greet = function () {
  console.log(`Hello ${this.name}`);
};
objUser2.greet(); // Hello John Doe
