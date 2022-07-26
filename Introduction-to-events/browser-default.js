// Browser default actions
/**
 * Many events automatically lead to certain actions performed by the browser, for instance:
 * - A click on a link - initiates navigation to its URL
 * - A click on a form submit button - initiates its submission to the server.
 * - Pressing a mouse button over a text and moving it = selects the text.
 * 
 * ===Preventing browser actions===
 * There are two ways to inform the browser we don't want it to act:
 * - The main way is to use the event object. There's a method event.preventDefault().
 * - If the handler is assigned using on(event) (not by addEventListener), then returning false also works the same.
- In this HTML, a click on a link doesn't lead to NavigationPreloadManager; the browser doesn't do anything:
<a href ="/" onclick="return false"> Click here </a>
or
<a href="/" onclick="event.preventDefault()"> here</a>
====The “passive” handler option====
The optional passive: true option of addEventListener signals the browser that the handler is not going to call preventDefault().

Why might that be needed?

There are some events like touchmove on mobile devices (when the user moves their finger across the screen), that cause scrolling by default, but that scrolling can be prevented using preventDefault() in the handler.

So when the browser detects such event, it has first to process all handlers, and then if preventDefault is not called anywhere, it can proceed with scrolling. That may cause unnecessary delays and “jitters” in the UI.

The passive: true options tells the browser that the handler is not going to cancel scrolling. Then browser scrolls immediately providing a maximally fluent experience, and the event is handled by the way.

For some browsers (Firefox, Chrome), passive is true by default for touchstart and touchmove events.
==== Summary
There are many default browser actions:

mousedown – starts the selection (move the mouse to select).
click on <input type="checkbox"> – checks/unchecks the input.
submit – clicking an <input type="submit"> or hitting Enter inside a form field causes this event to happen, and the browser submits the form after it.
keydown – pressing a key may lead to adding a character into a field, or other actions.
contextmenu – the event happens on a right-click, the action is to show the browser context menu.
…there are more…
All the default actions can be prevented if we want to handle the event exclusively by JavaScript.

To prevent a default action – use either event.preventDefault() or return false. The second method works only for handlers assigned with on<event>.

The passive: true option of addEventListener tells the browser that the action is not going to be prevented. That’s useful for some mobile events, like touchstart and touchmove, to tell the browser that it should not wait for all handlers to finish before scrolling.

If the default action was prevented, the value of event.defaultPrevented becomes true, otherwise it’s false.

Stay semantic, don’t abuse
Technically, by preventing default actions and adding JavaScript we can customize the behavior of any elements. For instance, we can make a link <a> work like a button, and a button <button> behave as a link (redirect to another URL or so).

But we should generally keep the semantic meaning of HTML elements. For instance, <a> should perform navigation, not a button.

Besides being “just a good thing”, that makes your HTML better in terms of accessibility.

Also if we consider the example with <a>, then please note: a browser allows us to open such links in a new window (by right-clicking them and other means). And people like that. But if we make a button behave as a link using JavaScript and even look like a link using CSS, then <a>-specific browser features still won’t work for it.

*/ 