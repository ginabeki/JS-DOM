//Dispatching custom events
// we can only assign handlers, but also generate events from Js.

//Event constructor
/**
 * Built-in event classes form a hierarchy, similar to DOM element classes. The root is the built-in event class
 * we can create Event objects like this:
 * let event = new Event(type[, options]);
 * - Arguments:
 * type - even type, a string like "click" or our own like "my-event".
 * options - the objct with two optional properties:
 * 1. bubbles: true/false - if true, then the event bubbles
 * 2. cancelable: true/false - if true, then the "default action" may be prevented. Later we\ll see what it means for custom events.
 * by default both are false: {bubbles: flase, cancelable: false}
 * 
 * ===dispatchEvent===
 * After an event object is created, we should run it on an element using the call elem.dispatchElement(event)
 * then handlers react on it as if it were a regular browser event. If the event was created with the bubbles flag then it bubbles.
 * In the example below the click event is initiated in JS. the handler works same way as if the button was clicked
 * ===event.isTrusted
There is a way to tell a “real” user event from a script-generated one.

The property event.isTrusted is true for events that come from real user actions and false for script-generated events.

===bubbling  example===
- we can create a bubbling event with the name "hello" and catch it on  document. All we need is to set bubbles to true:
<h1 id="elem">Hello from the script!</h1>

<script>
  // catch on document...
  document.addEventListener("hello", function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // ...dispatch on elem!
  let event = new Event("hello", {bubbles: true}); // (2)
  elem.dispatchEvent(event);

  // the handler on document will activate and display the message.

</script>
 */