/*

Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
    or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change 
    if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
    sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

*/

const valuePerUnitOfCurrency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

let changeStatusArr = [
  { status: "INSUFFICIENT_FUNDS", change: [] },
  { status: "CLOSED", change: [] },
  { status: "OPEN", change: [] },
];

function checkCashRegister(price, cash, cid) {
  let change = Math.round(100 * (cash - price)) / 100;
  let totalCashInDrawer = cid.map((arr) => arr[1]).reduce((a, b) => a + b);

  if (change === totalCashInDrawer) {
    changeStatusArr[1].change = cid;
    return changeStatusArr[1];
  }

  let changeOutArray = cid.map((arr) => [arr[0], 0]);
  let unitsOfChangeArray = cid.map((arr) => [
    arr[0],
    Math.round(arr[1] / valuePerUnitOfCurrency[cid.indexOf(arr)]),
  ]);

  for (let i = valuePerUnitOfCurrency.length - 1; i >= 0; i--) {
    while (
      change >= valuePerUnitOfCurrency[i] &&
      unitsOfChangeArray[i][1] > 0
    ) {
      change -= valuePerUnitOfCurrency[i];
      change = Math.round(100 * change) / 100;
      unitsOfChangeArray[i][1] -= 1;
      changeOutArray[i][1] += 1;
    }
  }

  changeOutArray = changeOutArray
    .map((arr) => [
      arr[0],
      (arr[1] *= valuePerUnitOfCurrency[changeOutArray.indexOf(arr)]),
    ])
    .filter((arr) => arr[1] > 0);

  // Add changeOutArray to changeStatusArr
  if (change !== 0) {
    console.log(change);
    return changeStatusArr[0];
  } else {
    changeStatusArr[2].change = changeOutArray.reverse();
    return changeStatusArr[2];
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
