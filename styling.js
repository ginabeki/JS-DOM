// create all your default styling with css, but when updating you might need to us js

/**
 * element.ClassName
 * element.ClassList.add()
 * element.ClassList.remove()
 * element.ClassList.toggle()
 * element.style.propName = value
 * element.style.cssText = ""
 * window.getComputedStyle(element)
 */
let main = document.querySelector("main");
main.className = "some";
main.classList; // allows to look at individual features
foot.classList.add("some");
foot.classList.remove("other"); //removes features
element.ClassList.toggle("other"); //
// element.style.propName = value
foot.style.backgroundColor = "green"; //use camecase when naming properties
foot.style.CssText = "font-family:san Serif; spacing:5px;";
//window.getComputedStyle(element)
let style = window.getComputedStyle(ul);
