/*

Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey 

*/




function chunkArrayInGroups(arr, size) {
  let chunkyArr = [];
  let leftOverChunk = arr.length % size;
  let chunkyArrLength = (arr.length - leftOverChunk) / size;
  while (chunkyArr.length < chunkyArrLength) {
    chunkyArr.push(arr.splice(0, size));
  }

  if (leftOverChunk) {
    chunkyArr.push(arr.splice(-leftOverChunk));
  }

  return chunkyArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3)
);
