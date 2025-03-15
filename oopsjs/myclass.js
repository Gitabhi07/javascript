// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abv`;
//   }
// }

// let chai = new User("chai", "qwert@g.com", "123");
// console.log(chai.encryptPassword());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abv`;
};

let tea = new User("tea", "qwe@g.com", "123");
console.log(tea.encryptPassword());
