/* 

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

*/


// The Smallest Common Multiple is the smallest number which can be divided evenly by two numbers 

const getSCM = (num1, num2) => {

  let maxNum = Math.max(num1, num2)
  let minNum = Math.min(num1, num2);
  let gcm = maxNum * minNum;
  for (let i = maxNum; i <= gcm; i += maxNum) {
    if (i % minNum === 0) {
      return i;
    }
  }
}

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let scm = getSCM(...arr);

  for (let i = min; i <= max; i++) {
    if (scm % i !== 0) {
      scm = getSCM(scm, i);
    }
  }

  return scm;
}

console.log(smallestCommons([18,5]));