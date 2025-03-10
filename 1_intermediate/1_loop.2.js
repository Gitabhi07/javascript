// for of

// for of loop is used to iterate over the values of an iterable object like an array, string, map, set, etc.
// it returns an iterator object which can be used to iterate over the values of the iterable object.
// the for of loop is similar to the for in loop but it only returns the values of th
// iterable object, not the keys.
// the for of loop is used to iterate over the values of an iterable object like an array,
// string, map, set, etc.
// it returns an iterator object which can be used to iterate over the values of the iterable object.
// the for of loop is similar to the for in loop but it only returns the values of the iterable object, not the keys.

// syntax

//  ["value1", "value2", "value3", ...] of iterableObject
// [{key1: value1}, {key2: value2}, {key3: value3}, ...] of iterableObject

// example

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);

// }

// const str = "hello";
// for (const char of str) {
//     console.log(char);

// }

// Maps: key-value pairs
// map is for unique key-value pairs and order is maintained
// map is an iterable object

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("AU", "Australia");

// console.log(map);
for (const [key, value] of map) {
//   console.log(key, ":", value);
}

// in map for in not reacheable or itreatable
for (const key in map) {
  console.log(`${key} : ${map[key]}`);
}

// Sets: unique values
// set is for unique values and order is not maintained
// set is an iterable object

const myObj = {
  name: "John",
  age: 30,
  country: "US",
};

for (const [key, value] of Object.entries(myObj)) {
  // console.log(key, ":", value);
}
// or

for (const key in myObj) {
  // console.log(`${key} ":" ${myObj[key]}`);
}

const progLang = ["JavaScript", "Python", "Java", "C++", "Ruby"];
for (const lang of progLang) {
//   console.log(lang);
}

for (const key in progLang) {
  //  console.log(key, ":", progLang[key]);
   
        
    }