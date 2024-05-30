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