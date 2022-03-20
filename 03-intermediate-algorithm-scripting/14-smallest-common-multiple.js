/* 

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

*/

// The Smallest Common Multiple is the smallest number which can be divided evenly by two numbers

const getSCM = (num1, num2) => {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);

  for (let i = max; i <= max * min; i += max) {
    if (i % min === 0) {
      return i;
    }
  }
};

const smallestCommons = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let scm = getSCM(max, min);

  for (let i = min; i < max; i++) {
    if (scm % i !== 0) {
      scm = getSCM(scm, i);
    }
  }

  return scm;
};

console.log(smallestCommons([1, 5])); // return 60.

console.log(smallestCommons([5, 1])); // return 60.

console.log(smallestCommons([2, 10])); // return 2520.

console.log(smallestCommons([1, 13])); // return 360360.

console.log(smallestCommons([23, 18])); // return 6056820.

console.log(smallestCommons([18, 5])); // return 12252240.
