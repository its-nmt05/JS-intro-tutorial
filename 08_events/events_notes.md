# JavaScript events Notes

**Sources**

https://developer.mozilla.org/en-US/docs/Web/Events

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

## What is an event?

Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.

To react to an event, you attach an **event handler** to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are **registering an event handler**. Note: Event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

All event listeners in JS do not execute sequentially. Instead they execute when a specific event is invoked.

## An example: handling a click event

In the following example, we have a single `<button>` in the page:

```html
<button>Change color</button>
```

Then we have some JavaScript. We'll look at this in more detail in the next section, but for now we can just say: it adds an event handler to the button's `"click"` event, and the handler reacts to the event by setting the page background to a random color:

```jsx
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

## Using addEventListener()

As we saw in the last example, objects that can fire events have an `addEventListener()` method, and this is the recommended mechanism for adding event handlers.

## Removing listeners

If you've added an event handler using `addEventListener()`, you can remove it again using the `removeEventListener()` method. For example, this would remove the `changeBackground()` event handler:

```jsx
btn.removeEventListener("click", changeBackground);
```

## Adding multiple listeners for a single event

By making more than one call to `addEventListener()`, providing different handlers, you can have multiple handlers for a single event:

```jsx
myElement.addEventListener("click", one);
myElement.addEventListener("click", two);
```

Both functions would now run when the element is clicked.

> 💡 **Note:** The `addEventListener()` method is the *recommended* way to register an event listener. The benefits are as follows:
> - It allows adding more than one handler for an event. This is particularly useful for libraries, JavaScript modules, or any other kind of code that needs to work well with other libraries or extensions.
> - In contrast to using an `onXYZ` property, it gives you finer-grained control of the phase when the listener is activated (capturing vs. bubbling).
> - It works on any event target, not just HTML or SVG elements.

## Event handler properties

Objects (such as buttons) that can fire events also usually have properties whose name is `on` followed by the name of the event. For example, elements have a property `onclick`. This is called an *event handler property*. To listen for the event, you can assign the handler function to the property.

For example, we could rewrite the random-color example like this:

```jsx
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

With event handler properties, you can't add more than one handler for a single event because any subsequent attempts to set the property will overwrite earlier ones:

```jsx
element.onclick = function1;
element.onclick = function2;
```

## **Inline event handlers — don't use these**

You might also see a pattern like this in your code:

```html
<button onclick="bgChange()">Press me</button>
```

The earliest method of registering event handlers found on the Web involved [*event handler HTML attributes*](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#event_handler_attributes) (or *inline event handlers*) like the one shown above — the attribute value is literally the JavaScript code you want to run when the event occurs.

You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.

> 💡 **Never use the HTML inline event handler attributes. Here’s why:**
> - It is not a good idea to mix up your HTML and your JavaScript, as it becomes **hard to read**. One button is OK, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a **maintenance nightmare**.
> - Many common server configurations will disallow inline JavaScript, as a **security measure**.
> - **You should never use the HTML event handler attributes** — those are **outdated**, and using them is bad practice

## Event objects

Sometimes, inside an event handler function, you'll see a parameter specified with a name such as `event`, `evt`, or `e`. This is called the **event object**, and it is automatically passed to event handlers to provide extra features and information. For example, let's rewrite our random color example again slightly:

```jsx
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.parentNode.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

The `target` property of the event object is always a reference to the element the event occurred upon.

Some event objects add extra properties that are relevant to that particular type of event. For example, the `keydown` event fires when the user presses a key. Its event object is a `KeyboardEvent`, which is a specialized `Event` object with a `key` property that tells you which key was pressed:

```html
<input autocomplete="off" type="text" id="textInput">
```

```jsx
const textInput = document.querySelector('#textInput')
const output = document.querySelector('#output')
textInput.addEventListener('keydown', (e) => {
    // console.log(e.type);
    // console.log(e.key);
    output.innerHTML = `You pressed "${e.key}"`
});
```

## Preventing default behavior

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. The most common example is that of a web form, for example, a custom registration form. When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right. Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks. Let's look at a simple example.

Here we implement a very simple check inside a handler for the `submit` event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the `preventDefault()` function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:

```jsx
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const form = document.querySelector('form')
const para = document.querySelector('p')

form.addEventListener('submit', (e) => {
    if (!firstName.value || !lastName.value){
        e.preventDefault()
        para.innerHTML = 'Please fill in both names!'
    }
    // console.log(e.type);
})
```

## Event bubbling

Event bubbling describes how the browser handles events targeted at nested elements.

Consider a web page like this:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Here the button is inside another element, a `<div>` element. We say that the `<div>` element here is the **parent** of the element it contains. What happens if we add a click event handler to the parent, then click the button?

```jsx
const output = document.querySelector('#output')
const container = document.querySelector('#container')

function handleClick(e) {
    // console.log(e.target);
    output.innerHTML += `You clicked on: ${e.currentTarget.tagName}\n`
}

container.addEventListener('click', handleClick)
```

You'll see that the parent fires a click event when the user clicks the button:

```
You clicked on: DIV
```

This makes sense: the button is inside the `<div>`, so when you click the button you're also implicitly clicking the element it is inside.

Now, let's try adding click event handlers to the button, its parent (the `<div>`), and the `<body>` element that contains both of them:

```jsx
const output = document.querySelector('#output')
const container = document.querySelector('#container')
const button = document.querySelector('button')
const body = document.querySelector('body')

function handleClick(e) {
    // console.log(e.target);
    output.innerHTML += `You clicked on: ${e.currentTarget.tagName}\n`
}

container.addEventListener('click', handleClick)
button.addEventListener('click', handleClick)
body.addEventListener('click', handleClick)
```

You'll see that all three elements fire a click event when the user clicks the button:

```
You clicked on: BUTTON
You clicked on: DIV
You clicked on: BODY
```

In this case:

- the click on the button fires first
- followed by the click on its parent (the `<div>` element)
- followed by the `<div>` element's parent (the `<body>` element).

We describe this by saying that the event **bubbles up** from the innermost element that was clicked.

The `Event` object has a function available on it called `stopPropagation()` which, when called inside an event handler, prevents the event from bubbling up to any other elements.

## Event capture

An alternative form of event propagation is *event capture*. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the *least nested* element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the `capture` option in `addEventListener()`.

This example is just like the bubbling example we saw earlier, except that we have used the `capture` option:

```jsx
const output = document.querySelector('#output')
const container = document.querySelector('#container')
const button = document.querySelector('button')
const body = document.querySelector('body')

function handleClick(e) {
    // console.log(e.target);
    output.innerHTML += `You clicked on: ${e.currentTarget.tagName}\n`
}

container.addEventListener('click', handleClick, true)
button.addEventListener('click', handleClick, true)
body.addEventListener('click', handleClick, true)
```

In this case, the order of messages is reversed: the `<body>` event handler fires first, followed by the `<div>` event handler, followed by the `<button>` event handler:

```
You clicked on: BODY
You clicked on: DIV
You clicked on: BUTTON
```

## Event

- **`type`** - The **`type`** read-only property of the `Event` interface returns a string containing the event's type. It is set when the event is constructed and is the name commonly used to refer to the specific event, such as `click`, `load`, or `error`.

- **`bubbles`** - The **`bubbles`** read-only property of the `Event` interface indicates whether the event bubbles up through the DOM tree or not.

- **`timeStamp`**  - The **`timeStamp`** read-only property of the `Event` interface returns the time (in milliseconds) at which the event was created. This value is the number of milliseconds elapsed from the beginning of the **time origin** until the event was created. If the global object is `Window`, the time origin is the moment the user clicked on the link, or the script that initiated the loading of the document.

- **`preventDefault()` -** The **`preventDefault()`** method of the interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

- **`defaultPrevented`** - The **`defaultPrevented`** read-only property of the `Event` interface returns a boolean value indicating whether or not the call to `Event.preventDefault()` canceled the event.

- **`target` -** The read-only **`target`** property of the `Event` interface is a reference to the object onto which the event was dispatched (fired). It is different from `Event.currentTarget` when the event handler is called during the bubbling or capturing phase of the event.

- **`currentTarget`**  - The **`currentTarget`** read-only property of the `Event` interface identifies the element to which the event handler has been attached.
  
    This will not always be the same as the element on which the event was fired, because the event may have fired on a descendant of the element with the handler, and then bubbled up to the element with the handler.

- **`stopPropagation()` -** The **`stopPropagation()`** method of the `Event` interface prevents further propagation of the current event in the capturing and bubbling phases.

- **`key` -** The `KeyboardEvent` interface's **`key`** read-only property returns the value of the key pressed by the user, taking into consideration the state of modifier keys such as Shift as well as the keyboard locale and layout.

- **`altKey` -** The **`KeyboardEvent.altKey`** or **`MouseEvent.altKey`** read-only property is a boolean value that indicates if the alt key (Option or ⌥ on macOS) was pressed (`true`) or not (`false`) when the event occurred.

- **`ctrlKey` -** The **`KeyboardEvent.ctrlKey`** or **`MouseEvent.ctrlKey`** read-only property returns a boolean value that indicates if the control key was pressed (`true`) or not (`false`) when the event occurred.

- **`shiftKey` -** The **`KeyboardEvent.shiftKey`** or **`MouseEvent.shiftKey`** read-only property is a boolean value that indicates if the shift key was pressed (`true`) or not (`false`) when the event occurred.

- `event position coordinates`

    | Property | Relative To | Includes Scrolling |
    | --- | --- | --- |
    | `clientX` | viewport | No |
    | `clientY` | viewport | No |
    | `pageX` | Entire web page | Yes |
    | `pageY` | Entire web page | Yes |
    | `screenX` | User's screen | No |
    | `screenY` | User's screen | No |
    | `x` (same as `clientX`) | viewport | No |
    | `y` (same as `clientY`) | viewport | No |z