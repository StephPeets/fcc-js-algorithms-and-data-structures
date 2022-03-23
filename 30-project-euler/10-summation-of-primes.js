/* 

https://projecteuler.net/problem=10
https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-10-summation-of-primes


Problem 10: Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

*/

// LATEST SOLUTION (MARCH 23, 2022)

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeSummation(n) {
  if (n < 2) {
    return 0;
  }
  let sumOfPrimes = 0;
  for (let i = n - 1; i >= 2; i--) {
    if (isPrime(i)) {
      sumOfPrimes += i;
    }
  }
  return sumOfPrimes;
}

console.log(primeSummation(2000000));
