// var c = 300

let a = 100;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("inner",a)
    console.log("inner",b)
    // console.log("inner",c);
}

console.log(a);
// console.log(b);
// console.log(c);


// =====================================================================================================
// nested scope

function one() {
    const user = "john";

    function two() {
        const website = "google";
        console.log(user);
    }
    // console.log(website);
    // two();
    
}
one();

if(true){
    const user = "john";
    if(true){
        const website = "google";
        console.log(user);
        console.log(website);  // this will work
    }
    // console.log(website);    // this will throw an error
    console.log(user);  // this will work
}
// console.log(user);  // this will throw an error
// console.log(website); // this will throw an error


