// Mouse Events
/**
 * // Mouse event types
 * - mousedown/mouseup - mouse button is clicked/released over an element
 * - mouseover/mouseout - Mouse pointer comes over/out from an element.
 * - mousemove - Every mouse move over an element triggers that event.
 * - click - triggers after mousedown and then mouseup over the same element if the left mouse button was used.
 * - dbclick - triggers after two clicks on the same element within a short timeframe. Rarely used nowadays.
 * - contextmenu - triggers when the right mouse button is pressed. There are other ways to open a contextmenu, e.g. using a special keyboard key, it triggers in that case also, so it's not exactly the mouse event. 
 * 
 * ===Events order===
 * - a user action may trigger multiple events.
 * - a left-button click first triggers mousedown, when the button is pressed, then mouseup and click when it's pressed.
 * - when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order mousedown - mouseup - click
 * === Mouse button===
 * - click-related events always have the button property, which allows to get the exact mouse button.
 * - Mousedown and mouseup handlers may need event.button, because these events trigger on any button, so button allows to distinguish between "right-mousedown" and "left-mousedown"
 * The possible values of event.button are:-
 * left button(primary) => event.button = 0
 * middle button(auxilliary) => event.button = 1
 * right button(secondary) => 2
 * X1 button(back) => 3
 * X2 button(forward) => 4
 * - most mouse devices only have the left and right buttons, so possible values are 0 and 2. Touch devices also generate similar events when one taps on them.
 * ===Modifiers: shift, alt, ctrl, and meta===
 * All mouse events incude the information about pressed modifier keys.
 * Event properties:
 * - shiftKey: Shift
 * - altKey: Alt or Opt for Mac
 * - ctrlKey: Ctrl
 * - metaKey: Cmd for Mac
 * They are true if the corresponding key was pressed during the event.
 * for instance, the button below only works on Alt+Shift+click
 * <button id="button">Alt+Shift+Click on me!</button>
 * <script>
 *  button.onClick = function(event) {
 *      if(event.altKey && event.shiftKey) {
 *          alert("Hooray!")
 * }
 * };
 * </script>
 * 
 * ===Coordinates: clinetX/Y, page X/Y
 * 1. Window-relative: clientX and clientY.
 * 2. Document-relative:pageX and pageY
 * 
 * ===Preventing selection on mousedown===
 * Double mouse click has a side effect that may be disturbing in some interfaces: it selects text.
 * - For instance, double-clicking on the text below selects it in addition to our handler:

<span ondblclick="alert('dblclick')">Double-click me</span>
If one presses the left mouse button and, without releasing it, moves the mouse, that also makes the selection, often unwanted.

There are multiple ways to prevent the selection, that you can read in the chapter Selection and Range.

In this particular case the most reasonable way is to prevent the browser action on mousedown. It prevents both these selections:

Before...
<b ondblclick="alert('Click!')" onmousedown="return false">
  Double-click me
</b>
...After

Now the bold element is not selected on double clicks, and pressing the left button on it won’t start the selection.
===Preventing copying===
If we want to disable selection to protect our page content from copy-pasting, then we can use another event: oncopy.

<div oncopy="alert('Copying forbidden!');return false">
  Dear user,
  The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>

 */