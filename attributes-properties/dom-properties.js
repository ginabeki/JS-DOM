// Attributes and properties
// when the browser loads the page, it reads another word:"parses" the HTML and generates DOM object from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.
// for instance, if the tag is <body id="page">, then the DOM object has body.id="page"
// DOM properties
/**
 * DOM nodes are regular JS objects. We can alter them.
 * for instance, let's create a new property in document.body:
 * document.body.myData = {
 * name: "Caesar",
 * title: "Imperator"
 * };
 * 
 * alert(document.body.myData.title);
 */

//HTML attributes
// In HTML, tags may have attributes. When the browser parses the HTML t create DOM objects for tags, it recognises standard attributes and creates DOM properties from them.
// All attributes are accessible by using the following methods:
/**
 * elem.hasAttributes(name)- checks for existence.
 * elem.getAttribute(name) - gets the value.
 * elem.setAttribute(name, value) - sets the value.
 * elem.removeAttribute(name) - removes the attribute.
 * elem.removeAttribute(name) – to remove the attribute.
 * elem.attributes is a collection of all attributes.
 */
// All attributes starting with "data-" are reserved for programmers' use. They are available in the dataset property.
// for instance, if an elem has  an attribute named "data-about", it's available as elem.dataset.about, check the example below:
/**
 * <body data-about "Elephant">
 * <script>
 *  alert(document.body.dataset.about); // Elephant
 * </script> 
 */
