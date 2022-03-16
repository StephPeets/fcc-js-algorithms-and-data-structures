/*

Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

*/

function reverseString(str) {
    let newStr = str.split("").reverse().join("");
  
    return newStr;
  }
  
  console.log(reverseString("hello")); // oellh