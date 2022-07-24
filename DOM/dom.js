// DOM - Document Object Model represents all page content as Objects that can be modified
// The document object serves as the main "entry point" to the page. We can change or create anything on the page using it.

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

// CSSOM for styling
// stands for CSS Object Model for CSS rules and stylesheets, that explains how they are represented as objects, and how to read and write them 

// WALKING THE DOM
/**
 * All operationson on the DOM start with the document object. That's the main entry point to DOM. From it we can access any node 
 * The topmost tree nodes are available directly as document properties: <html> = document.documentElement
 * The topmost document node is document.documentElement. That's the DOM node of the <html> tag
 * Another widely used DOM node is the <body> element - document.body. 
 * The <head> tag is available as document.head
 * In the DOM, the null value means doesn't exist or no such node
 * # CHILDREN: childNodes, firtChild, lastChild
 * Child nodes (or children) - elements that are directchildren. They ae nested directly in the given one. For instance <head> and <body> are children of <html>
 * Descendants - all elements that are nested in the given one, including children, their children, and so on.
 * 
 * elem.childNodes[0] === elem.firstChild
 * elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
 * There's also a special function elem.hasChildNodes() to check whether there are any child nodes.
 * 
 * SIBLINGS AND THE PARENT
 * //parent of <body> is <html>
 * alert(document.body.parentNode === document.documentElement); // true
 * 
 * // after <head> goes <body>
 * alert(document.head.nextSibling); // HTMLBodyElement
 * // before <body> goes <head>
 * alert(document.body.previousSibling); //HTMLHeadElement
 * For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
 */
// Searching: getElement*, querySelector*
/**
 * if an element has the id attribute, we can get the element by using the method - document.getElementById
 */
//querySelectorAll
/**
 * elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.
 * let elements = document.querySelectorAll("ul > li:last-child")
 */

//querySelector
/**
 * The call to elem.querySelector(css) returns the first element for the given  CSS selector
 * getElementsBy* is mostly history as querySelector is more powerful and shorter to write.
 */