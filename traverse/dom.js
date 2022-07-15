/**
 * parent.children = is a nodeList of elements
 * parent.firstElementChild - is 1 element node
 * parent.lastELementCHild -is 1 element node
 * node.nextElementSibling - is 1 element node
 * node.previousElementsSIbling - is 1 element node
 * node.parentNode -is 1 element node
 * parent.contain(node) - returns Boolean
 */

let main = document.querySelector(".main");

let c = main.children;
let c2 = main.childNodes; // comments, text, and elements

let ul = main.children[1];
let h2 = main.firstElementChild;
let ul2 = h2.nextElementSibling;

console.log(ul2);
let h2a = ul2.previousElementSibling;
console.log(h2a);

let ul = main.children[1];
let lis = ul.children;
let firstLi = lis[0]; // ul.firstElementChild

var txt = firstLi.textContent;
var txt2 = firstLi.firstChild.nodeValue;
console.log(text, txt2);

firstLi.firstChild.nodeValue = txt.toUpperCase();
var bool = main.contains(firstLi);
console.log(bool); //true
