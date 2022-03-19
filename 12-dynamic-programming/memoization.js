/* 
Fibonacci - take previous 2 numbers and add them together in a sequence
Memoization = storing the previous results in a function 

https://youtu.be/WbwP4w6TpCk

*/



function memoizeFib(n, prevValues = []) {
    if (prevValues[n] != null) {
      return prevValues[n]
    }
    let result;
    if (n <= 2) {
      result = 1;
    } else {
      result = memoizeFib(n - 1, prevValues) + memoizeFib(n - 2, prevValues);
    }
    prevValues[n] = result;
    return result;
  }
  
  console.log(memoizeFib(40));
  
  function fib(n) {
    if (n <= 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }
  
  console.log(fib(40));