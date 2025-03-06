const tinderuser = new Object();
tinderuser.id = "123";
tinder_id = Symbol("tinder_id");
tinderuser[tinder_id] = "456";
console.log(tinderuser.id); // outputs: 123
console.log(tinderuser[tinder_id]); // outputs: 456
console.log(tinderuser); // outputs: { id: '123', [Symbol(tinder_id)]: '456' }
tinderuser.name = "John Doe";
tinderuser.age = 30;

console.log(tinderuser); // {};

const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 1: "one", 2: "two", 3: "three" };

const obj3 = { obj1, obj2 };
console.log(obj3);
// { obj1: { '1': 'one', '2': 'two', '3': 'three' },
