// node 1_intermediate/1_loop.1.js
// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);

// }

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         // console.log(`inner loop i: ${i} j: ${j}`);
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

const myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//     if (myArray[i] === 'c') {
//         // console.log('detected c');
//         break;
//     }
// }

// for (let i = 0; i < 20; i++) {
//     if(i === 5) {
//         console.log('detected 5');
//         continue;
//     }
//     console.log(`value of i is ${i}`);

// }

// while loop
let arr = 0;
while (arr < myArray.length) {
  console.log(`value is: ${myArray[arr]}`);
  arr++;
}
