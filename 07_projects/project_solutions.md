# 4 Projects in JS
**project link:** [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-adh96a?file=index.html)

### Project 1: solution
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    body.style.backgroundColor = event.target.getAttribute('id')
  })
})
```

### Project 2: solution
```javascript
const form = document.querySelector('form')

// const height = document.querySelector('#height').value
// console.log(`Height is: ${height}`) # this will produce empty value

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height < 0 || isNaN(height)){
    results.innerHTML = `Please provide valid height: ${height}`
  } else if (weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide valid weight: ${weight}`
  } else {
    const bmi = (weight / (height * height / 10000))
    let comment;
    if(bmi < 18.6){
      comment = "Under Weight"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      comment = "Normal Range"
    } 
    else {
      comment = "Overweight"
    }
    // show the result
    results.innerHTML = `<span>${comment} : ${bmi.toFixed(2)}</span>`
  }
})
```

### Project 3: solution
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function () {
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```