// node 2_basic/2_array.js

let dc_heroes = [
  "Superman",
  "Batman",
  "Wonder",
  "Flash",
  "Green Lantern",
  "Aquaman",
];
// console.log(dc_heroes);

let marvel_hero = [
  "Iron-man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
];
// console.log(marvel_hero);

// concate two arrays
let heroes = dc_heroes.concat(marvel_hero);
console.log(heroes);

// slice() method returns the selected elements in an array, as a new array object.
// let slice = heroes.slice(1, 4);
// console.log(slice); // [ 'Batman', 'Wonder', 'Flash' ]

// splice() method adds/removes items to/from an array, and returns the removed item(s).

let splice = heroes.splice(1, 4);
console.log(splice); // [ 'Batman', 'Wonder', 'Flash', 'Green Lantern' ]clear

//spread operator
let allHeroes = [...dc_heroes, ...marvel_hero];
console.log(allHeroes);

const anoArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 0, [11, 12], 13]];
// flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const novoArray = anoArray.flat(Infinity);
console.log(novoArray);

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
const filterArray = novoArray.filter((item) => item > 5);
console.log(filterArray);

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const mapArray = filterArray.map((item) => item * 2);
console.log(mapArray);

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// isArray() method determines whether the passed value is an Array.
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.from("Hello"));
console.log(Array.of(1, 2, 3, 4, 5));
console.log(Array.of("Hello"));
console.log(Array.of("Hello", "World"));
console.log(Array.of("Hello", "World", 1, 2, 3, 4, 5));
console.log(Array.of("Hello", "World", [1, 2, 3, 4, 5]));
console.log(Array.of("Hello", "World", [1, 2, 3, 4, 5], 1, 2, 3, 4, 5));
console.log(Array.of("Hello", "World", [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(Array.of("Hello", "World", [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 1, 2, 3, 4, 5));

