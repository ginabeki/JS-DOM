/**
 * web storage objects localstorage and session storage allows to save key/value pairs in browser.
 * Both storage objects provide same methods and properties:
 * - setItem(key, value) - store key/vale pair
 * - getItem(key) - get the value by key
 * - removeItem(key) - remove the key with its value
 * - clear() - delete everything
 * - key(index) - get the key on a given position
 * - length - the number of stored items
 * 
 * ===localStorage demo===
 * The main features of localstorage are:
 * - shared between all tabs and windows from similar origin
 * - The data does not expire. It remains after the browser restart and even OS reboot.
 * for instance, if you run this code...
 * localStorage.setItem("test", 1);
 * ...And close/open the browser or just open the same page in a different window, then you can get it like this:
 * alert(localSTorage.getItem("test")); //1
 * ===Object-like access===
 * we can also use a plain object way of getting/setting keys, like this:
 * // set key
 * localStorage.test = 2;
 * // get key
 * alert(localStorage.test); //2
 * // remove key
 * delete localStorage.test;
 * That's allowed for historical reasons, and mostly works, but generally not recommended, because:
 * 1 - if the key is user-generated, it can be anything, like length or toString, or another built-in method of localStorage. In that case getItem/setItem work fine, while object-like access fails:
 * - let key = "length";
 * - localStorage[key] = 5; // Error, can't assign length
 * 2 - There's a storage event, it triggers when we modify the data. THat event does not happen forobject-like access. We'll see that later in this chapter.
 * 
 * // Looping over keys
 * As we've seen, the methods provide "get/set/remove by key" functionality. But how to get all saved values or keys?
 * Unfortunately, storage objects are not iterable.
 * One way is to loop over them as over an array:
 * for(let i=0; i<localStorage.length; i++) {
 * let key = localSTorage.key(i);
 * alert(`${key}: ${localSTorage.getItem(key)}`)}
 * 
 * ANother way is to use for key in localSTorage loop, just as we do with regular objects. It iterates over keys, but also outputs few built-in fields that we don't need:
 */