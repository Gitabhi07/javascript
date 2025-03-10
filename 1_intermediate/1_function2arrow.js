 // node 1_intermediate/1_function2arrow.js

const user = {
    user: 'abhi',
    price: 100,

    welcome: function(){
        // console.log(`${this.user} , welcome to website `)
        console.log(this)
    }
}

// user.welcome();
// console.log(this)//{}

// function chai(){
//     let username = 'qwerty'
//     console.log(this)
// }

// chai()

// const chai = function chai(){
//     let username = 'qwerty'
//     console.log(this.username)
// }

// chai()

//arrow function

// const chai = ()=>{
//     let username = 'qwerty'
//         console.log(this)
// }

// chai()

// const addtwo = (num1,num2)=> {
//     return num1 + num2
// }
// const result = addtwo(2,4)
// console.log(result)


// implicit arrow fun their no need of return method to pass value..
// const addtwo = (num1,num2)=> (num1 + num2) // we also write like this on panranthise-() but when we wrte in { } their it need return method...
const addtwo = (num1,num2)=> num1 + num2
console.log(addtwo(2,6))



// ===============================================================>>>
// IIFE - Immediate , Invoke function expressions,
// global value ko pollute krne se rokne ke liye iife ka use krte hai..

// function chai(){
//     console.log('DB connected')
// }()  <----
// it cause error at () symbol

// ================================>>
// named iife
// ( function chai() => {
//     console.log('DB connected')
// })()

// without named iife with arrow fun
( () => {
    console.log('DB connected')
})();

// value passing in iffe and multiple iffe code is write with the use of ; which seperate the two iffe. if ; is not presrent then it cause error or treat as two iffe as single iffe.
( (name) => {
    console.log('DB connected ${name}')
})('value');

( () => {
    console.log('DB connected')
})();

/////==================== Javascript Execution Context ==>
// {} --> global EC with this variable on window
// js is single threade language isme har kaam ke liye ek process hai..