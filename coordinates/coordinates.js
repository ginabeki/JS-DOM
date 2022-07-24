/**=====COORDINATES==== */
/**
 * to move elements around we should be familiar with coordinates
 * Most JS methods deal with one of two coordinate systems:
 * 1. Relative to the window - similar to position: fixed. these coordinates are denoted as clinetX/clinetY
 * 2. Relatiive to the document - similar to position:absolute in the document root, calculated from the document top/left edge. denoted as pageX/pageY
 * 
 * ===Element coordinates: getBoundingClientRect
 * the method elem.getBoundingClientRect() returns window coordinates for a minimal rectangle that encloses elem as an object of ult-in DOMRect class.
 * 
 */