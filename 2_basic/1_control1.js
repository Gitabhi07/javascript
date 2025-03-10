// if
// if (true) {
//     console.log('true');    
// }

// if (false) {
//     console.log('false');
// }
// let tem = 41
// if (tem === 40) {
//     console.log('true');
// }else {
// console.log('false');}


// short hand notation
const value = 40
                                                                

// if(value > 25) console.log('true'), console.log('true 2');// this code is not a good practice


// && and operator
const user=true
const user2=true
if(user && user2 && value > 25) {
    console.log('true');
}
// || or operator
if(user || user2 || value > 25) {
    console.log('true');
}
// ! not operator
if(!user) {
    console.log('true');
}
// ternary operator
console.log(value>55 ? 'true' : 'false');
// switch case
const day = 'sunday'    
switch(day) { 
    case 'monday':
        console.log('monday');
        break;
    case 'tuesday':
        console.log('tuesday');
        break;
    case 'wednesday':
        console.log('wednesday');
        break;
    case 'thursday':
        console.log('thursday');
        break;
    case 'friday':
        console.log('friday');
        break;
    case 'saturday':
        console.log('saturday');
        break;
    case 'sunday':
        console.log('sunday');
        break;
    default:
        console.log('not a valid day');
        break;  
        }

// truthy and falsy values
// falsy values: undefined, null, 0, '', NaN, false, 0n(bigInt)
// truthy values: not falsy values , '0', ' ' ->space , [], {}, function(){},'false'

const userEmail = 'a@a.com'
if(userEmail) {
    console.log('got the email');
}
else {
    console.log('no email');
}
const userEmail1 = []
if(userEmail1.length === 0) {
    console.log('Array is empty');
}

const obj = {} 
if(Object.keys(obj).length === 0) {  //Object.keys(obj) returns an array of keys
    console.log('array is empty');
}

// nullish coalescing operator ??
// const user1 = null
const user1 = undefined
// const userlist = user1 || 4  
const userlist = user1 ?? 4
console.log(userlist);