// LATEST SOLUTION (March 20, 2022)

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



// OLDER SOLUTION (Sept 24, 2021):

// function convertToRoman2(num) {
//   let romanNum = [];
// while (num >= 1000) {
//   romanNum.push("M");
//   num -= 1000;
// }
// while (num >= 900) {
//   romanNum.push("CM");
//   num -= 900;
// }
//     while (num >= 500) {
//       romanNum.push("D");
//       num -= 500;
//     }
//     while (num >= 400) {
//       romanNum.push("CD");
//       num -= 400;
//     }
//     while (num >= 100) {
//       romanNum.push("C");
//       num -= 100;
//     }
//   while (num >= 90) {
//       romanNum.push("XC");
//       num -= 90;
//     }  
//     while (num >= 50) {
//       romanNum.push("L");
//       num -= 50;
//     }
//   while (num >= 40) {
//     romanNum.push("XL");
//     num -= 40;
//   }
//    while (num >= 10) {
//      romanNum.push("X");
//      num -= 10;
//    }
//    while (num >= 9) {
//      romanNum.push("IX");
//      num -=9;
//    }

//       while (num >= 5) {
//       romanNum.push("V")
//       num -= 5;
//       }
//          while (num >= 4) {
//      romanNum.push("IV");
//      num -= 4;
//    }
//       while(num > 0) {
//         romanNum.push("I");
//         num -= 1;
//       }
  

//   return romanNum.join("");
// }

// console.log(convertToRoman2(3999));