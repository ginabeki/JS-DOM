// Bubbling and Capturing
/**
 * ==Bubbling===
 * The bubbling principle is simple
 * -when an event happens on an element, it first runs the handlers on it,then on its parents,then allthe way up on other ancestors
 * Let's say we have nested elements form > div > p with a handler on each of them:
 * 
 * <style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

A click on the inner <p> first runs onclick:

On that <p>.
Then on the outer <div>.
Then on the outer <form>.
And so on upwards till the document object.

- so if we click on <p>, then we'll see 3 alerts: p - div - form
- The process is called bubbling because events bubble from the inner element up through parents like a bubble in the water
===event.target===
The most deeply nested element that caused the event is called a target element, accessible as event.target
-event.taret is the actual element inside the form that was clicked.

===stop bubbling===
A bubbling event goes from the target element straight up. Usually it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.
- But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is event.stopPropagation().
*/