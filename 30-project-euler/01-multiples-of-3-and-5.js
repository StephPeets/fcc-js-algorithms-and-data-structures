/*

https://projecteuler.net/problem=1
https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5

Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.



*/


function multiplesOf3and5(number) {
    let counter = 0;
    for (let i = number - 1; i >= 3; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            counter += i;
        }
    }
    return counter;
  }
  
  console.log(multiplesOf3and5(49)) // should return 543.
  
  console.log(multiplesOf3and5(1000)) // should return 233168.
  
  console.log(multiplesOf3and5(8456)) // should return 16687353.
  
  console.log(multiplesOf3and5(19564)) // should return 89301183.