// String basic
// String is a primitive data type in JavaScript. Strings are used to store text.
// A string can be any text inside double or single quotes.

const string = 'Hello, World!';
const repoCount = 50;

// `` is called template literals or string interpolation
console.log(`Hello my name is ${string} and my repo Count is ${repoCount}`); // Hello my name is Hello, World! and my repo Count is 50


const gameName = new String('full stack');
console.log(gameName);

console.log(gameName.localeCompare('full stack')); // 0
console.log(gameName.localeCompare('fullstack')); // -1
console.log(gameName.localeCompare('full stack game')); // -1
console.log(gameName.localeCompare('full')); // 1
// console.log(gameName.small());


console.log(gameName.charAt(6));
console.log(gameName.indexOf('s'));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.lastIndexOf('s'));
console.log(gameName.normalize());
console.log(gameName.replace('full', 'half'));
console.log(gameName.split(' '));
console.log(gameName.substr(7, 2));
console.log(gameName.substring(5,7));
console.log(gameName.trim());
console.log(gameName.valueOf());
console.log(gameName.toString());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.startsWith('f'));
console.log(gameName.endsWith('m'));
console.log(gameName.includes('stack'));
console.log(gameName.includes('stacks'));
console.log(gameName.slice(5, 9));
console.log(gameName.concat(' game'));
console.log(gameName.repeat(4));
console.log(gameName.match('stack'));
console.log(gameName.search('c'));

console.log(gameName.charCodeAt(7));
console.log(String.fromCharCode(65));

console.log(gameName.blink());




