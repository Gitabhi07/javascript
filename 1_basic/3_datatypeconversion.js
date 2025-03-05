// let score = '33';

// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

// Convert the score to a string
// let scoreString = score.toString();
// console.log(scoreString);




//------------------------------------->>>>>>
// check a boolean datatype

// let loggedIn = "edgf";
// console.log(Boolean(loggedIn));


// --------------------------------------->>>>>>

// check a string datatype

let str1 = "Hello";
let str2 = "World";

console.log(str1 +" "+ str2);

// console.log('1'+2);
// console.log(1 + '2');
// console.log('1'+ 2 + 2);
// console.log(1+2+'2');

// it depends on the order of the operands. If the first operand is a string, then the second operand is converted to a string. If the first operand is a number, then the second operand is converted to a number.


// ------------<<<<<<<-----------primitive datatype---------------->>>>>>
//  7 types of primitive datatype
// number, string, boolean, null, undefined, symbol, bigint

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId); // false
console.log(id == anotherId); // false
const num = BigInt(12345678901234567890);
console.log(num);
console.log(typeof num);

// null and undefined
let age = null;
console.log(age);
console.log(typeof age);

// ------------<<<<<<<-----------non-primitive datatype---------------->>>>>>
// object, array ,function

const herrs = ['John', 'Doe', 'Jane'];
console.log(herrs);
console.log(typeof herrs);

const person = {
    name: 'John',
    age: 30
}
console.log(person);    
console.log(typeof person);
person.age = 40;
person.name = 'Doe';
console.log(person);


const myfunction = function(){
    console.log('Hello');
}
console.log(myfunction);
console.log(typeof myfunction);
myfunction();
// myfunction = 'Hello'; // TypeError: Assignment to constant variable.
// console.log(myfunction);
// console.log(typeof myfunction);
