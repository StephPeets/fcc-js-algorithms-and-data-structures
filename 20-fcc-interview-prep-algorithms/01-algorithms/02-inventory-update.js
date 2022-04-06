// Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.

// Update the current existing inventory item quantities (in arr1).

// If an item cannot be found, add the new item and quantity into the inventory array.

// The returned inventory array should be in alphabetical order by item.

// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

// Make an array of the existing inventory item names and if they match any new inventory items,
// add the quantity of new inventory to the old inventory.

// push arrays of new items (not found in the old inventory)

// sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));

// LATEST SOLUTION (April 5, 2022)

const updateInventory = (curArr, newArr) => {
  let output = [...curArr];
  let curItems = curArr.map((arr) => arr[1]);
  
  for (let e of newArr) {
    if (curItems.includes(e[1])) {
      output[curItems.indexOf(e[1])][0] += e[0];
    } else {
      output.push(e);
    }
  }

  return output.sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));
};

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));

// PREVIOUS SOLUTION (April 4, 2022)

// function updateInventory(arr1, arr2) {
//   for (let thing of arr1) {
//     for (let item of arr2) {
//       if (thing.includes(item[1])) {
//         thing[0] += item[0];
//         arr2.splice(arr2.indexOf(item), 1);
//       }
//     }
//   }
//   let output = [...arr1, ...arr2];
//   output = output.sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));

//   return output;
// }