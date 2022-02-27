const lib = require('../../../modules/lib');
// ----------------------- //
/*

  You are compiling a price checker for a grocery store. The grocery prices are as follows:
  * butter: $1,
  * eggs: $2,
  * milk: $3,
  * bread: $4,
  * cheese: $5

  Create a function costOfGroceries(groceries)
  --which takes a single array of grocery items
  --returns the total cost.

  Create a function mostExpensiveGroceries(groceriesList)
  --that takes in a 2-dimensional array of grocery items
  --returns the index of the sub-array with the highest cost.

  */

// ------ //
lib.start();
// ------ //

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

function costOfGroceries(groceries) {
  let sum = 0;

  for (let item of groceries) {
    sum += getPrice(item);
  }
  return sum;
}

function getPrice(item) {
  let inventory = [
    ['butter', 1],
    ['eggs', 2],
    ['milk', 3],
    ['bread', 4],
    ['cheese', 5],
  ];

  for (let product of inventory) {
    if (product[0] === item) {
      return product[1];
    }
  }
  return -1;
}

function mostExpensiveGroceries(list) {
  let sum = 1;
  let index = -1;

  for (let i = 0; i < list.length; i++) {
    let cartTotal = 0;
    for (let item of list[i]) {
      cartTotal += getPrice(item);
    }
    if (cartTotal > sum) {
      sum = cartTotal;
      index = i;
    }
  }
  return index;
}

costOfGroceries(groceriesA); // 8
costOfGroceries(groceriesB); // 13
costOfGroceries(groceriesC); // 9
costOfGroceries(groceriesD); // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log('You have scored ' + score + '/7 points.');
