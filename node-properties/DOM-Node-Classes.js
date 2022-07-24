// Node properties: type, tag and contents
// DOM node classes
/**
 * different DOM nodes may have different properties.  For instance, an element node corresponding to tag <a> has link-related properties, and the one corresponding to <input> jas input-related properties and so on. 
 * Text nodes are not the same as element nodes.  But there are similar properties and methods between all of them cos al classes of DOM nodes form a single hierarchy.
 * The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it. 
 */

// innerHTML: the contents
// this property allows to get the HTML inside the element as a string
//we can also modify it. so it's one of the most powerful ways to change the page.

// outerHTML: full HTML of the element
// this property contains the full HTML of the element. That's like innerHTML plus the element itself.

//textContent: pure text
// this provides access to the text inside the element: only text, minus all <tags>