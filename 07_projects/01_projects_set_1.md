# Projects related to DOM

## project link

[Click here](https://stackbliz.com/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1: Theme Switcher

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

## Project 2: BMI Calculator

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

## Project 3: Digital Clock

```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4: Guess the Number

```javascript

let randomNumber = Math.random() * 100 + 1;

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousguess = [];
let numberOfGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number!');
  } else if (guess < 1) {
    alert('Please enter a valid number!');
  } else if (guess > 100) {
    alert('Please enter a number less than 100!');
  } else {
    previousguess.push(guess);
    if (numberOfGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOOO high!`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numberOfGuess++;
  remaining.innerHTML = `${11 - numberOfGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (event) {
    randomNumber = Math.random() * 100 + 1;
    previousguess = [];
    numberOfGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numberOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5: Keyboard keypress event project 

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
  </div>
  `;
});

```

## Project 6: Generate Random Color

```javascript

// generate a random color

const randomColor = function () {
  const hex = '01234567890ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  console.log('start');

  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  console.log('stop');
  clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
