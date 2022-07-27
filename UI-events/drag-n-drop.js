// Drag n Drop with mouse events
/**
 * Drag and drop is a great interface solution. In the modern HTML standard there are sppecial events such as dragstart, dragend.
 * These events allow us to support different special kind of drag and drop. Then JS can access the contents of such files.
 * 
 * ===Drag and Drop Algorithm===
 * The basic drag and drop algorithm looks like this:
 * 1. On mousedown - prepare the element for moving
 * 2. Then on mousemove move it by changing left/top with position: absolute.
 * 3. On mouseup - perform all actions related to finishing the drag n drop.
 * 
 * Here's the implementation of dragging a ball:
 * ball.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

===Correct positioning===
- To initiate the drag "n" drop, we can mousedown anywhere on the ball. But if it take it from its edge, then the ball suddenly jumps to become centered under the mouse.
===Potential drop targets(droppables)===
While dragging, the draggable element is always above other elements. Mouse events only happen on the top element, not on those below it.

We can lay a lot on this foundation.

- On mouseup we can intellectually finalize the drop: change data, move elements around.
- We can highlight the elements we’re flying over.
- We can limit dragging by a certain area or direction.
- We can use event delegation for mousedown/up. A large-area event handler that checks event.target can manage Drag’n’Drop for hundreds of elements.

 * 
 */