// DOM - Document Object Model represents all page content as Objects that can be modified
// The document object serves as the main "entry point" to the page. We can change or create anything on the page using it.

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

// CSSOM for styling
// stands for CSS Object Model for CSS rules and stylesheets, that explains how they are represented as objects, and how to read and write them 