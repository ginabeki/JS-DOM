// Modifying the document
// DOM modification is the key to creating "live" pages
// CREATING AN ELEMENT
/**
 * to create DOM nodes, there are two methods:
 * 1. document.createElement(tag). creates a new element node with the given tag: 
 * let div = document.createElement("div");
 * 2.document.createTextNode(text). creates a new text node with the given text:
 * let textNode = document.createTextNode("Here I am");
 * most of the time we need to create element nodes, such as the div for the message.
 */


// CREATING THE MESSAGE
// Creating the message div takes 3 steps:
/**
 * // 1. Create <div> element
 * let div = document.createElement("div")
 * // 2. set its class to "alert"
 * div.className = "alert";
 * // 3. Fill it with the content
 * div.innerHTML = "<strong>Hi there!</strong> You've read an important message."
 */
// Insertion Methods
// to make the div sow up, we need to insert it somewhere into document. For instance, into <body> element, referenced by document.body
// There's a special method append for that: document.body.append(div)
Here’s the full code:

{/* <style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

  document.body.append(div);
</script> */}
