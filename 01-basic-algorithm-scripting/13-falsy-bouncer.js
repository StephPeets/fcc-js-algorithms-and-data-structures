/*

Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

*/

function bouncer(arr) {
  arr = arr.filter((val) => Boolean(val));
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

/* 

Easier way: 
   
function bouncer(arr) {
    return arr.filter(Boolean);
}
   
Code Explanation
The Array.prototype.filter method expects a ***function that returns a Boolean value*** which takes a single argument and returns 
true for truthy value or false for falsy value. Hence we pass the ***built-in Boolean function***.

https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-falsy-bouncer/16014

*/
