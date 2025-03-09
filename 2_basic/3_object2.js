const tinderuser = new Object(); //{}; // new Object();
tinderuser.id = "123";
tinder_id = Symbol("tinder_id");
tinderuser[tinder_id] = "456";
console.log(tinderuser.id); // outputs: 123
console.log(tinderuser[tinder_id]); // outputs: 456
console.log(tinderuser); // outputs: { id: '123', [Symbol(tinder_id)]: '456' }
tinderuser.name = "John Doe";
tinderuser.age = 30;

console.log(tinderuser); // {};

// combine two objects
const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };
const obj4 = { 7: "seven", 8: "eight", 9: "nine" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);
// { obj1: { '1': 'one', '2': 'two', '3': 'three' },

// const obj3 = Object.assign(obj1, obj4);
// console.log(obj3);
// { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

// sparsde operator

const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);

// to access value in object we use dot notation or bracket notation
// console.log(obj1.1); // error
console.log(obj1[1]); // one
console.log(obj1["1"]); // one
console.log(obj1[2]); // two
console.log(obj1["2"]); // two
console.log(obj1[3]); // three
console.log(obj1["3"]); // three

const regularObj = {
  email: "qwertyuio123456@gmailmcom",
  fullname: {
    userfullname: {
      firstname: "John",
      lastname: "Doe",
    },
  },
};

console.log(regularObj);
console.log(regularObj.email);
console.log(regularObj.fullname);
console.log(regularObj.fullname.userfullname);
console.log(regularObj.fullname.userfullname.firstname);
console.log(regularObj.fullname.userfullname.lastname);

// optional chaining operator ?. is use to avoid error if the property is not found when accessing the object from API calls
console.log(regularObj?.fullname?.userfullname?.firstname);
console.log(regularObj?.fullname?.userfullname.firstname);
console.log(regularObj?.fullname.userfullname);
console.log(regularObj?.fullname?.userfullname?.lastname);
// console.log(regularObj?.fullname?.userfullname?.middlename);// undefined
// console.log(regularObj?.fullname?.userfullname?.middlename?.length);    // undefined

// array of objects for accessing the values we use dot notation or bracket notation
// like arrObj[0].name or arrObj[0]["name"]
const arrObj = [
  { name: "John Doe", age: 30, email: "qwe@gmail.com" }, // 0
  { name: "Jane Doe", age: 25, email: "rtte@gmail.com" }, // 1
];
console.log(arrObj);
console.log(arrObj[0]);
console.log(arrObj[1]);
console.log(arrObj[0].name);
console.log(arrObj[1].name);
console.log(arrObj[0].age);
console.log(arrObj[1].age);
console.log(arrObj[0].email);
console.log(arrObj[1].email); //

// keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
// values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
console.log(Object.keys(arrObj));
console.log(Object.values(arrObj));

console.log(Object.keys(arrObj[0]));
console.log(Object.values(arrObj[0]));
console.log(Object.keys(arrObj[1]));
console.log(Object.values(arrObj[1]));


//////////////////////////////////////////////////////////////////////////////////////  

// destructuring object---------------------------------------->>>>>

const course = {
  courseName: "JavaScript",
  duration: "3 months",
  courseFee: 1000,
  courseType: "online",
  courseInstructor: "John Doe",
}

// course.courseInstructor

const { courseName, duration, courseFee, courseType, courseInstructor: instructor } = course;
console.log(courseName);
console.log(duration);
console.log(courseFee);
console.log(courseType);
console.log(instructor);