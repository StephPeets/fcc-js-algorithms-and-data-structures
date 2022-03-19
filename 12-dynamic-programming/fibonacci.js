/* 

Fibonacci - take previous 2 numbers and add them together

Classic fibonacci problem: find the nth fibonacci number in the sequence

https://youtu.be/oBt53YbR9Kk

*/

function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(20));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
