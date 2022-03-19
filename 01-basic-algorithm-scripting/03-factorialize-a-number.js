/* 

Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

*/

const factorialize = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorialize(n - 1);
};

console.log(factorialize(5)); // return a number.

console.log(factorialize(5)); // return 120.

console.log(factorialize(10)); // return 3628800.

console.log(factorialize(20)); // return 2432902008176640000.

console.log(factorialize(0)); // return 1.
