// node 1_intermediate/1_function1.js

// Function Declaration

function sayHello() {
  console.log("H");
  console.log("E");
  console.log("L");
  console.log("L");
  console.log("O");
}

// sayHello();

// function addtownumber(number1, number2) {
//     console.log(number1 + number2);
// }

// addtownumber(10, 20);

function addtownumber(number1, number2) {
  return number1 + number2;
}

const result = addtownumber(10, 20);
console.log(result);

// ------------------------------------------------------------------------->>>
// function loginuser(username){
//     return `${username} is logged in`;
// }

// const user = loginuser("john");
// console.log(user);
// console.log(loginuser("john")); // this will return a string
// console.log(loginuser("")); // this will return a string
// console.log(loginuser()); // this will return a string
// console.log(loginuser(10)); // this will return a string
// console.log(loginuser(true)); // this will return a string

// function loginuser(username){  // default value is undefined but we can set it to any value like username = abhi
//     if(username === undefined){    // if(!username) is also valid
//         return "Please provide a username";
//     }
//     return `${username} is logged in`;
// }

// console.log(loginuser());

// =====================================================================================================
// Function Expression

// rest operator ... in fun declaration
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(10, 20, 30, 40, 50));

function calculateCartPrices(v1, v2, ...num1) {
  return num1;
}
console.log(calculateCartPrices(10, 20, 30, 40, 50));


// object to function

const  onj = {
  name: "abhi",
  age: 23,
}

function handleobj(anyonj){
    console.log(`username is ${anyonj.name} and age is ${anyonj.age}`);
    
}

handleobj(onj);

const mynewarray = [1,2,3,4,5,6,7,8,9,10];

function handlearray(...array){
    console.log(array);
}
handlearray(mynewarray);



