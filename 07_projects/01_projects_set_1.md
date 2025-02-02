# Projects related to DOM

## project link

[Click here](https://stackbliz.com/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Project 1 solution code")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## project 2 solution

```javascript

const form = document.querySelector('form');
// this usecase will give you a empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML += `<span><br>You are under weight!<span>`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML += `<span><br>You are fit!</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML += `<span><br>You are over weight!</span>`;
    }
  }
});

```