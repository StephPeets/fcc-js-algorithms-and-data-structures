/*

Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

 */


function frankenSplice(arr1, arr2, n) {
    let resultArr = [...arr2];
    resultArr.splice(n, 0, ...arr1)
    return resultArr;
    }
  
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1)); 
  // Output: [4, 1, 2, 3, 5]


  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); 
  // Output: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]


  console.log(frankenSplice([1, 2, 3, 4], [], 0));
  // Output: [1, 2, 3, 4])