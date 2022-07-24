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
 * 
 */