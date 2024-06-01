# 6 Projects in JS
**project link:** [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-adh96a?file=index.html)

### Project 1: solution

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    body.style.backgroundColor = event.target.getAttribute("id");
  });
});
```

### Project 2: solution

```javascript
const form = document.querySelector("form");

// const height = document.querySelector('#height').value
// console.log(`Height is: ${height}`) # this will produce empty value

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height < 0 || isNaN(height)) {
    results.innerHTML = `Please provide valid height: ${height}`;
  } else if (weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide valid weight: ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000);
    let comment;
    if (bmi < 18.6) {
      comment = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      comment = "Normal Range";
    } else {
      comment = "Overweight";
    }
    // show the result
    results.innerHTML = `<span>${comment} : ${bmi.toFixed(2)}</span>`;
  }
});
```

### Project 3: solution

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

### Project 4: solution

```javascript
let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess <= 1) {
    alert("Please enter a number more than 1");
  } else if (guess >= 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (numGuess > 10) {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else {
    displayMessage(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (event) => {
    randomNumber = Math.round(Math.random() * 100 + 1);
    numGuess = 1;
    prevGuess = [];
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

### Project 5: solution

```javascript
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  `;
});
```

### Project 6: solution

```javascript
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let timerId;

startButton.addEventListener("click", () => {
  if (!timerId) {
    // don't allow creating new setInterval() callbacks if already one is running
    timerId = setInterval(() => {
      document.body.style.backgroundColor = generateRandomColor();
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null; // safety check for edge cases
});

// generate a random color
function generateRandomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function random(range) {
  return Math.floor(Math.random() * range);
}
```
