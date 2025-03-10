// node 1_intermediate/1_mapandreducer_1.js

// in htis example, the return value is not passed to the next callback
// the return value is not passed to the next function
// const coding = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// const values = coding.forEach((items) => {
//     console.log(items);
//     return items;
    
// });

// console.log(values);
// foreach does not return anything
// the return value is not used


console.log("=====================");
// filter
// the callback function takes the current element as an argument and returns any value
// the callback function can take up to three arguments
// accesing each element in the array and returning the element that meets the condition as be provided in the callback function
// for that true value is returned
// the return value is used basic of filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = numbers.filter((num)=> num > 5)
// const newNum = numbers.filter((num)=> {
//     return num > 5
// })
// console.log(newNum);
console.log("=====================");

// another way to use filter method with help of forEach method..

const values =[]
numbers.forEach((num)=> {
    if (num > 5){
    values.push(num)
}
})
console.log(values);

console.log("=====================");
// Example on filters

const books = [
    {title: 'Book one', genere: 'fiction', publish: 1982, edition: '2004'},
    {title: 'Book two', genere: 'non-fiction', publish: 1985, edition: '2005'},
    {title: 'Book three', genere: 'fiction', publish: 1987, edition: '2006'},
    {title: 'Book four', genere: 'non-fiction', publish: 1989, edition: '2007'},
    {title: 'Book five', genere: 'fiction', publish: 1992, edition: '2008'},
    {title: 'Book six', genere: 'non-fiction', publish: 1995, edition: '2009'},
    {title: 'Book seven', genere: 'fiction', publish: 1997, edition: '2010'},
    {title: 'Book eight', genere: 'non-fiction', publish: 1999, edition: '2011'},
    {title: 'Book nine', genere: 'fiction', publish: 2002, edition: '2012'},
]

const fictionBooks = books.filter((bk)=> bk.genere === 'fiction');
const userBooks = books.filter((bk)=> {return bk.publish == '1992' && bk.edition == '2008'});
console.log(userBooks);
console.log(fictionBooks);