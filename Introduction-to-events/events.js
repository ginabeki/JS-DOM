// ===Introduction to browser events===
// an event is a signal that something has happened. All DOM nodes generates such signals(but events are not limited to DOM)
// Here's a list of the most useful DOM events:
/**
 * ===Mouse events:===
 * - click - when the mouse clicks on an element (touchscreen devices generate it on a tap)
 * - contextmenu - when the muse right-clicks on an element
 * - mouseover/mouseout - when the mouse cursor comes over/leaves an element
 * -mousedown/mouseup - when the mouse button is pressed/released over an element.
 * - mousemove - when the mouse is moved
 * 
 * ===Keyboard events:===
 * -keydown and keyup - when a keyboard key is pressed and released.
 * ===Form elements events===
 * -submit - when the visitor submits a <form>
 * -focus - when the visitor focuses on an element, e.g on an <input>
 * 
 * ===Document events:===
 * -DOMContentLoaded - when the HTML is loaded and processed. DOM is fully built.
 * 
 * ===CSS events:===
 * -transitioned - when CSS animation finishes
 *
 */

// Event Handlers
/**
 * To react on events we can assign a handler - a function that runs in case of an event
 * Handlers are a way to run JS code in case of user actions.
 * There are several ways to assign a handler
 * 
 * ===HTML-attribute===
 * A handler can be set in HTML with an attribute named on<event>.
 * For instance, to assign a click handler for an input, we can use onclick, like here:
 * <input value = "Click me" onclick="alert('Click!') " type="button">
 * -Please not that inside onclick we use single quotes, because the attribute iself is in double quotes. If we forget that the code is inside the attribute and use double quotes inside, the it won't work right.
 * An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.

Here a click runs the function countRabbits():
 * 
 * <script>
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert("Rabbit number " + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!">
 */

// DOM Property
/**
 * we can assign a handler using a DOM property on<event>.
 * for instance, elem.onclick:
 * <input id="elem" type="button" value="Click me">
 * <script>
 *  elem.onclick = function() {
 * alert("Thank you")
 * };
 * </script>
 * 
 * To remove a handler - assign elem.onclick = null
 * 
 * ===Accessing the element: this===
 * The value of this inside a handler is the element. The one which has the handler on it.
 * for instance:
 * <button onclick="alert(this.innerHTML)"> Click me </button>
 * <input type="button" id="button" onclick="sayThanks()">
 * 
 * ===addEventListener===
 *The syntax to add a handler:
 element.addEventListener(event, handler, [options]);
 ==event==
 -event name, e.g "click"
 ==handler==
 The handler function
 ==options==
 An additional optional object with properties:
 -once - if true, then the listener is automatically removed after it triggers
 -capture - the phase where to handle the event
 -passive - if true the handler will not call preventDefualt()
 *To remove the handler, use removeEventListener:
 element.removeEvenetListener(event, handler, [options])
 - Here's the right way to removeEventListener:
 function handler() {
    alert("Thanks!");
 }
 input addEventListener("click", handler);
 //remove
 input.removeEventListener("click", handler);
 - if we don't store the function in a variable, the it is impossible to remove it.
 DOMContentLoaded  event triggers when the document is loaded and DOM is built

 // example
 document.addEventListener("DOMContentLoaded", function() {
    alert("DOM built");
 });
 * ==Event object==
 *To properly handle an event we'd want to know more about what's happened. Not just a "click" or a "keydown", but what were the poiner coordiantes? which key was pressed and so on.
 - when an event happens, the browser creates an event object, puts details on to it and passes it as an argument to the handler.
 // An example of getting pointer coordinates from the event object:
 <input type="button" value="Click me" id="elem">
 <script>
  elem.onclick = function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" event.clientY);
  };
  </script>
  Some properties of event object:

event.type
Event type, here it’s "click".
event.currentTarget
Element that handled the event. That’s exactly the same as this, unless the handler is an arrow function, or its this is bound to something else, then we can get the element from event.currentTarget.
event.clientX / event.clientY
Window-relative coordinates of the cursor, for pointer events.
 *===Object handlers: handleEvent===
 - We can assign not just a function, but an object as an event handler using addEventListener. When an event occurs, its handleEvent method is called
 for instance:
 <button id="elem">Click me</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + " at " + event.currentTarget);
    }
  };

  elem.addEventListener('click', obj);
</script>
====summary===
There are 3 ways to assign event handlers:

1. HTML attribute: onclick="...".
2. DOM property: elem.onclick = function.
3. Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.
 */