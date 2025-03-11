# Projects

## project link

Project 1-> [Color Changer - Click Here for solution](https://stackblitz.com/edit/dom-project-chaiaurcode-x7htx4au?file=2-BMICalculator%2Fchaiaurcode.js,1-colorChanger%2Fchaiaurcode.js)

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

project 2-> [BMI- Click Here for solution](https://stackblitz.com/edit/dom-project-chaiaurcode-x7htx4au?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#weight-guide");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `plz! give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plz! give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      guide.innerHTML = `Under Weight: ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      guide.innerHTML = `Normal : ${bmi}`;
    } else {
      guide.innerHTML = `Over-Weight : ${bmi}`;
    }
  }
});
```

project 3-> [Clock - Click for solution]()

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
