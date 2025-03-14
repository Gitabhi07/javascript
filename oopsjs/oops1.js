// object literals js mein isko hi base unit bola gya hai..
const user = {
  username: "qwerty",
  loginCount: 8,
  SignedIn: true,

  getUserDetails: function () {
    console.log("Get user deatils");
  },
};

// console.log(user["username"]);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greet = function () {
    console.log(`Welcome: ${this.usename}`);
  };

  return this;
}

const userOne = new User("qwerty", 10, true);
const usertwo = new User("qwe", 5, false);

console.log(userOne, "\n", usertwo);

// In this i knew about new method which is built in constructor which provide instance --> (empty object create) of existence property..
