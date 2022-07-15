let main = document.querySelector(".main");
let h2 = main.querySelector("h2");
h2.textContent = "Loading movies";

let p = main.querySelector("p");
p.innerHTML = "And now a list of <strong> Movies <strong>";
let ul = document.createElement("ul");
main.appendChild(ul);
movies.forEach(function (item) {
  let li = document.createElement("li");
  let txt = document.createTextNode(item);
  li.appendChild(txt);
  ul.appendChild(li);
});
