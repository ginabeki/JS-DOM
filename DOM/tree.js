// DOM Tree
/**
 * The backbone of an HTML document is tags
 * According to DOM every HTML tag is an object. Nested tags are children of the "enclosing one". The text inside a tag is an object as well.
 * all the objects are accessed by JS and can be used to modify the page.
 * for instance, document.body is the object representing the <body> tag
  */

// running this code will make the <body> re for 3 seconds:

document.body.style.background = "red" // make the background red
setTimeout(() => document.body.style.background = "", 3000) // return back

// DOM structure
/**
 * <!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
 */
/**
 * Every tree node is an object
 * Element nodes form the tree structure. <html> is at the root followed by <head> and <body> are its children
 * Texts inside elements forms text nodes, labelled as #text. A text node contains only a string. It may not have children and is always a leaf of the tree
 * for instance, the title tag contains text "About elk"
 * 
 */
// everything in HTML, even comments, becomes a part of the DOM
// There are 12 nodes types. In practice we usually work with 4 of them:
/**
 * 1. document - the "entry point" into the DOM
 * 2. element nodes - HTML tags, the tree building blocks
 * 3. text nodes- contain text
 * 4. comments - the information won't be shown by JS can read it from the DOM
 */