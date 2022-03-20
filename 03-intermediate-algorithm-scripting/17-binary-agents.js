/* 

Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

*/

const binaryAgent = (str) => {
  
  let strArr = str.split(" ");
  strArr = strArr.map(word => parseInt(word, 2));
  let binToEng = String.fromCharCode(...strArr);
  
  
  return binToEng;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);