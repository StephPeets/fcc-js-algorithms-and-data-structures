/*

Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey 

*/

// Refactored on 3/16/22

function chunkArrayInGroups(arr, size) {
  let twoDSplitArr = [];
  let origArr = arr;
  while (origArr.length > 0) {
    let addOn = origArr.splice(0, size);
    twoDSplitArr.push(addOn);
  }

  return twoDSplitArr;
}

/* 
From 3/15/22:

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

*/

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2), `  <-- Answer s/b: [ [ 'a', 'b' ], [ 'c', 'd' ] ]\n`);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), `  <-- Answer s/b: [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8 ] ]\n`); // 
console.log(
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3) // 
  , `  <-- Answer s/b: [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 9, 10, 11 ], [ 12, 13 ] ]\n`);