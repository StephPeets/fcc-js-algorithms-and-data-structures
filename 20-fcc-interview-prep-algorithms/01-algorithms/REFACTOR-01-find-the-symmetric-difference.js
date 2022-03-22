// Find the Symmetric Difference

// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are
// in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an
// expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation
// at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

// Create a function that takes two or more arrays and returns an array of their symmetric difference.
// The returned array must contain only unique values (no duplicates).

// LATEST SOLUTION (March 21, 2022)

let diffOf2Arrs = (arr1, arr2) => {
  let arr = [];
  for (let num of arr1) {
    if (!arr2.includes(num)) {
      arr.push(num);
    }
  }
  for (let num of arr2) {
    if (!arr1.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

function sym(args) {
  let arr = [...arguments];
  let outputArr = diffOf2Arrs(arr[0], arr[1]); //;

  for (let i = 2; i < arr.length; i++) {
    outputArr = diffOf2Arrs(outputArr, arr[i]).sort((a, b) => a - b);
  }

  for (let num of outputArr) {
    if (outputArr.indexOf(num) !== outputArr.lastIndexOf(num)) {
      outputArr.splice(outputArr.indexOf(num), 1);
    }
  }
  return outputArr;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3, 4, 5]

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // should return [3, 4, 5]

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should return [2, 3, 4, 6, 7]

console.log(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
); // should return [1, 2, 4, 5, 6, 7, 8, 9]
