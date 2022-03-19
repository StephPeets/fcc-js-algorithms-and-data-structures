/* 
Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false. <-- str = str.reverse();

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)   <--  const regex = /[^A-Za-z0-9]/g;

and turn everything into the same case (lower or upper case) in order to check for palindromes. <-- .toLowerCase()

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

function palindrome(str) {
  const regex = /[^A-Za-z0-9]/g;
  const cleanStr = str.replace(regex, "").toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  const isPalindrome = cleanStr === reverseStr;

  return isPalindrome;
}

console.log(palindrome("eye")); // true
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("five|_/|four")); // false
