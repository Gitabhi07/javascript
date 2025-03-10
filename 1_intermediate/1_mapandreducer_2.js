const muNuber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map is as same as filter it return the value
// map is used to return a new array

// const newNum = muNuber.map((num) => {
//     return num + 10;
// })

const newNum  = muNuber.map((num)=> num*10).map((num)=> num + 1).filter((num)=> num > 50);

console.log(newNum);

// last method is reduce
// reduce is used to reduce the array to a single value
// reduce take two arguments
// the first argument is the callback function
// the second argument is the initial value
// the callback function takes four arguments

const mynumbs =  [1,2,3,4]

const myTotal = mynumbs.reduce(function (acc, crrval) {
    console.log(`acc: ${acc}, crrval: ${crrval}`);
    
    return acc+crrval}, 0);

// const myTotal = mynumbs.reduce((acc, crrval)=> {
//     console.log(`acc: ${acc}, crrval: ${crrval}`);
    
//     return acc+crrval}, 0);
console.log(myTotal);


const shoppingCart = [
    {product: 'phone', price: 500},
    {product: 'screen', price: 100},
    {product: 'keyboard', price: 50},
    {product: 'mouse', price: 30},
    {product: 'charger', price: 20},
    {product: 'headset', price: 40},
];

const total = shoppingCart.reduce((acc, item)=> (acc + item.price),0)
console.log(total);  // 740