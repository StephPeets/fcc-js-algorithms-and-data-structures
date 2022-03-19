function convertToRoman(num) {
    let romanStr = '';
    const numerals = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    }
  
    const numberKeys = Object.keys(numerals).reverse();
    
    for (let key of numberKeys) {
      while (num >= key) {
        romanStr += numerals[key];
        num -= key;
      }
      
    }
  
  
   return romanStr;
  }
  
  console.log(convertToRoman(36));
  console.log(convertToRoman(450));