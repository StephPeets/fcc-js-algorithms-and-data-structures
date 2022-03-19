/*

Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

*/

function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split("");
    let arr2 = arr[1].toLowerCase().split("");
    let output = true;
    for (let letter of arr2) {
  
      if (arr1.indexOf(letter) === -1) {
       
        return output = false;
      }
      
    }
  
  return output;
  }
  
  
  console.log(mutation(["zyxwvutsrqponm02lkjihgfedcba", "qrsut"]));
  
  console.log(mutation(["hello", "ahe"]))