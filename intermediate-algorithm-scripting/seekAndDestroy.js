/* 

Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 

Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

*/

function destroyer(arr) {
  // puts all arguments into 2D array
  let newArr = [...arguments];

  // removes inital array from newArr and give it its own variable
  let initialArr = newArr.shift();

  // iterates through the initial array and filters out items that are also found in newArr
  initialArr = initialArr.filter((num) => !newArr.includes(num));
  
  return initialArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
