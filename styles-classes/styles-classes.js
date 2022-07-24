// there are twi ways to stye an element:
// 1. Create a class in CSS and add it: <div class="...">
// 2. Write properties directly into style: <div style="...">
// JS can modify both classes and style properties.

// className and classList
// chaging class is one of the most often used actions in scripts
//the elem.className corresponds to the "class" attribute
/**
 * <body class= "main page">
 *  <script>
 *      alert(document.body.className); //main page
 *  </script>
 * </body>
 * 
 * classList - the elem.classList is a special oject with methods to ad/remove/toggle a single class.
 * for instance:
 * 
 * <body class ="main page">
 *  <script>
 * // add a class
 *    document.body.classList.add("article")
 *      alert(document.body.className) // main page article
 *  </script>
 * </body>
 * 
 * methods of classList:
 * elem.classList.add/remove("class") - adds/removes the class
 * elem.classList.toggle("class") - adds the class if it doesn't exist. otherwise removes it.
 * elem.classList.contains("class") - checks for the gien class, returns true/false.
 * 
 * === Element style===
 * elem.style is an object that corresponds to what's written in the "style" attribute. Setting elem.style.width="100px" works similar with the style"width:100px"
 * 
 * for multi-word property the camelCase is used:
 * 1. background-color => elem.style.backgroundColor
 * 2.z-index => elem.style.zIndex
 * 3. border-left-width => elem.style.borderLeftWidth
 * 
 * for instance:
 * document.body.style.backgroundColor = prompt('background color?', 'green');
 * 
 * ==Resetting the style property===
 * sometimes we want to assign a style property, and later remove it.
 * for instance, to hide an element we can set elem.style.display = "none"
 * when later we want to remove the style.display instead of deleting elem.style.display we should assign an empty string to it: elem.style.display=""
 * 
 * // if we run this code, the <body> will blink
 * document.body,style.display="none"; // hide
 * setTimeout(() => document.body.style.display = "", 1000); // back to normal
 * 
 * if we set style.display to an empty string then the browser applies CSS classes and its built-in styles normally, as if there were no such style.display property at all.
 * Also there is a special method for that, elem.style.removeProperty("style property"). So we can remove a property like this:
 * 
 * document.body.style.background = "red" // set background to red
 * setTimeout(() => document.body.style.removeProperty("background"), 1000)
 */