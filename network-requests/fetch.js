// Fetch
/**
 * Js can send network requests to the server and load new information whatever it's needed.
 * for instance, we can use a network request to:-
 * - submit an order
 * - load user information
 * - receive latest updates from the server
 * ...and all of that without reloading the plage!
 * There's an umbrella term "AJAX" (Asynchronous Javascript And XML) for network requests from JS. 
 * There are multiple ways to send a network request and get information from the server.
 * The fetch() method is modern and versatile. 
 * The basic syntax is:
 * let promise = fetch(url, [options])
 * - url - the URL to access.
 * - options - optional parameters: method, headers etc
 * Without options, this is a simple GET request, downloading the contents of the URL.
 * The browser starts the request right away and returns a promise that the calling code should use to get the result.
 * Getting a response is usually a two-stage process
 * First, the promise returned by fetch, resolves with an object of the built in response class as soon as the server responds with headers.
 * - At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don't have the body yet
 * The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there's no such site. Abnormal HTTP-status such as 404 or 500 do not cause an error
 * We can see HTTP- status in response properties:
 * - status - HTTP status code, e.g. 200
 * - ok - boolean, true if the HTTP status code is 200-299
 * for example:
 * let response = await fetch(url);
 * if (response.ok) {
 * // if HTTP-status is 200-299
 * // get the response body(the method explained below)
 * let json = await response.json();
 * } else {
 * alert("HTTP-Error: " response.status)}
 * 
 * for  instance, let's get a JSON-object with latest commits from GITHUB:
 * let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
 * let response = await fetch(url);
 * 
 * let commits = await response.json(); // read response body and parse as JSON
 * alert(commits[0].author.login);
 * 
 * or, the same without await, using pure promises syntax:
 * fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));

  // POST requests
  to make POST request, or a request with another method, we need to use fetch options:
  - method - HTTP-method, e.g POST,
  - body - the request body, one of:
  // summary
  Fetch options so far:

method – HTTP-method,
headers – an object with request headers (not any header is allowed),
body – the data to send (request body) as string, FormData, BufferSource, Blob or UrlSearchParams object.
 */