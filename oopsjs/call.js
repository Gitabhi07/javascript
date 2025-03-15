function setName(username) {
  // complex DB calls
  this.username = username;
}

function createuser(username, email, password) {
  setName.call(this, username); // call is used to pass current context to another function
  this.email = email;
  this.password = password;
}

const chai = new createuser("chai", "qwerty@g.com", "qwe123");
console.log(chai);
