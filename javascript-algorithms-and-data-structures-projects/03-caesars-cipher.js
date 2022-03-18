/*

Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 

In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

*/


function rot13(str) {
  let strArr = str.split("");
  let codedCharArr = strArr.map((char) => str.charCodeAt(strArr.indexOf(char)));
  let decodedArr = codedCharArr.map((code) => {
    if (code < 65 || code > 90) {
      return String.fromCharCode(code);
    } else if (code < 78) {
      return String.fromCharCode(code + 13);
    } else {
      return String.fromCharCode(code - 13);
    }
  });

  return decodedArr.join("");
}

console.log(rot13("SERR PBQR PNZC."));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCRQ BIRE GUR YNML QBT"));
