// loop through array
// multiply each value in the array and return

function multiplyArray(arr) {
  let total = 1;
  for (let num of arr) {
    total *= num;
  }
  return total;
}

function twoDimensionalProduct(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= multiplyArray(array[i]);
  }
  return total;
}

let arr1 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [[11, 4], [2]];
console.log(twoDimensionalProduct(arr2)); // 88
