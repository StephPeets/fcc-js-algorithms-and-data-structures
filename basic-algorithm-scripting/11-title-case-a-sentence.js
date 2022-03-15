/* 

Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence 

*/


function titleCase(str) {
    // make str into an array and then capitalize (.toUpperCase()) the first character of each item in array
    // AND .toLowerCase() for remainder of string
    // use map?
    let titleCaseStr = str.split(" ").map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
      });
    
    return titleCaseStr.join(" ");
  }
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  console.log(titleCase("sHoRt AnD sToUt"));