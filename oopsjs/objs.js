function multiply(num) {
  return num * 5;
}

multiply.power = 2; // function object bhi hai aur function function bhi hai

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

// this is use for current contexts
function creatUser(username, score) {
  this.username = username;
  this.score = score;
}

creatUser.prototype.increment = function () {
  score++;
};

creatUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new creatUser("chai", 25);
const tea = creatUser("tea", 250);

chai.printMe();
