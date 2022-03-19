/*
https://youtu.be/itn09C2ZB9Y
https://medium.com/@StueyGK/algorithm-time-complexity-and-big-o-notation-51502e612b4d

Big-O Notation -> O(f(n))

In O(n), "O" stands for ORDER OF MAGNITUDE!

Big-O is a way to quantify the number of operations (steps) required for an algorithm to complete its computation.

As amount of input grows, how much more time and space will algorithm require to complete?

How does algorithm scale as input scales?

The "core" of an algorithm is the most dominant part of the function (repeats/returns over and over again)


Constant -> O(1) Takes 1 step

Logarithmic -> O(log n)
    log is the value of the exponent needed to get final value of algorithm

Linear -> O(n) takes as many steps as there are pieces of data

Log Linear -> O(n log n) takes O(log n) * O(n) (logarithmic * linear) steps

Quadratic  -> O(n^2) takes n^2 steps
    Cubic -> O(n^3)
    Exponential -> O(2^n)




*/

const data = ["A", "B", "C"];

const bigOFunc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(data[i]);    // "Core" of algorithm 
                             // (the most dominant part of the T(n) functionrepeats/returns over and over again)
  }
};

bigOFunc(data);





















/* 

Big O notation is the most common metric for calculating time complexity. It describes the execution time 
of a task in relation to the number of steps required to complete it.

Big O notation is written in the form of O(n) where O stands for “order of magnitude” and n represents 
what we’re comparing the complexity of a task against. A task can be handled using one of many algorithms, 
each of varying complexity and scalability over time.



*/