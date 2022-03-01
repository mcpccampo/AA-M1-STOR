const lib = require('../../modules/lib');
lib.start();

/*
function  isSorted()
 --checks if an array of numbers is in order, lowest to highest.
*/

function isSorted(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 2, 4, 4])); // true
console.log(isSorted([1, 2, 4, 3, 5, 6])); // false
lib.end();
