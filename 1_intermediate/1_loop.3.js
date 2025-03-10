// for each
// 1. create a variable called i and set it to 0
// 2. check if i is less than 5
// 3. log i to the console
// 4. increment i by 1
// 5. repeat steps 2-4

// for each loop not return anything

const coding = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// it is a higher order function
coding.forEach(function (item) {
  console.log(item);
});
console.log("=====================");
// using arror function
// arror function
coding.forEach((items) => {
  console.log(items);
});
console.log("=====================");
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);
// for each loop is used to iterate over an array
// it is a higher order function
// it takes a callback function as an argument
// the callback function is executed for each element in the array
// the callback function takes the current element as an argument
// the callback function can take up to three arguments
// the first argument is the current element
// the second argument is the index of the current element
// the third argument is the array itself
// the callback function can return a value
// the return value is ignored
// the return value is not used
// the return value is not stored
// the return value is not returned
// the return value is not passed to the next iteration
// the return value is not passed to the next element
// the return value is not passed to the next callback
// the return value is not passed to the next function
// the return value is not passed to the next loop
// the return value is not passed to the next statement
// the return value is not passed to the next block
// the return value is not passed to the next scope
// the return value is not passed to the next context
// the return value is not passed to the next closure
// the return value is not passed to the next variable
// the return value is not passed to the next parameter
// the return value is not passed to the next argument
// the return value is not passed to the next expression
// the return value is not passed to the next condition
// the return value is not passed to the next loop iteration
// the return value is not passed to the next loop statement
// the return value is not passed to the next loop block
// the return value is not passed to the next loop scope
// the return value is not passed to the next loop context
// the return value is not passed to the next loop closure
// the return value is not passed to the next loop variable
// the return value is not passed to the next loop parameter
// the return value is not passed to the next loop argument
// the return value is not passed to the next loop expression
// the return value is not passed to the next loop condition
console.log("=====================");
coding.forEach((items, index, array) => {
  console.log(items, index, array);
});

console.log("=====================");

const coding1 = [
  { name: "HTML", level: "beginner" },
  { name: "CSS", level: "beginner" },
  { name: "JavaScript", level: "intermediate" },
  { name: "React", level: "intermediate" },
  { name: "Node.js", level: "advanced" },
];

coding1.forEach((items) => {
  console.log(items.name, items.level);
});

// for each application use case
// 1. to iterate over an array
// 2. to iterate over an object
// 3. to iterate over a string
// 4. to iterate over a set
// 5. to iterate over a map
// 6. to iterate over a generator
// 7. to iterate over a file
// 8. to iterate over a stream
// 9. to iterate over a promise
// 10. to iterate over a fetch
// 11. to iterate over a response
// 12. to iterate over a request
// 13. to iterate over a database
// 14. to iterate over a collection
// 15. to iterate over a document
// 16. to iterate over a node
// 17. to iterate over a tree
// 18. to iterate over a graph
// 19. to iterate over a network
// 20. to iterate over a server
// 21. to iterate over a client
// 22. to iterate over a user
// 23. to iterate over a session
// 24. to iterate over a cookie
// 25. to iterate over a token
// 26. to iterate over a header
// 27. to iterate over a body

/*In real life e.g a programmer used for each loop to iterate over a array of objects and display the name and level of each object in the array.like price tag of a product in a shopping cart.
it mofifies the array and returns a new array.*/


// for each i string
const str = "hello";
const strArr = str.split("");
strArr.forEach((items) => {
  console.log(items);
});