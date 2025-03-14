const promise1 = new Promise((resolve, reject) => {
  // Do an asyn task
  //DB calls, Croptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

// reslove aur then ka direct connection hota hai...

promise1.then(function () {
  console.log("promise consumed");
});

// 2nd promise concept

new Promise((resolve, reject) => {
  // Do an asyn task
  //DB calls, Croptography, network
  setTimeout(function () {
    console.log("Async task is 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

// third promise

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "qwerty", email: "qwertyqqza@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

// value pass kr deta hai resolve jb then ke callbackfun mein koi value pass krte hai tb...

// fouth promise

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "asdfg", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise either resolved or rejected"));

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// rembember: use try and catch method bcz it good pratice for coding..
// async function getAllusers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json(); // await keyword is used to fetch data bcz it take time..
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// getAllusers();

// do above code in request and reject fromate

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch(() => console.log(error));
