const lib = require('../../../modules/lib.js');
// ----------------------- //
lib.clear();

/*
** NEEDS WORK **
A 2-dimensional array is also known as a "matrix".
 -write a function matrixAddition
   -accepts two matrices as arguments.
   -The two matrices are guaranteed to have the same "height" and "width".
   -The function should return a new matrix representing the sum of the two arguments.
   -To add matrices, we add the values at the same positions.
*/

// ------ //
lib.start();
// ------ //

let matrixA = [
  [2, 5],
  [4, 7],
];
let matrixB = [
  [9, 1],
  [3, 0],
];
let matrixC = [
  [-1, 0],
  [0, -1],
];
let matrixD = [
  [2, -5],
  [7, 10],
  [0, 1],
];
let matrixE = [
  [0, 0],
  [12, 4],
  [6, 3],
];

function matrixAddition(arr1, arr2) {
  let newMatrix = [];

  for (let i = 0; i < arr1.length; i++) {
    let index1Sum = 0;
    let index2Sum = 0;

    console.log('array1 :', arr1[i][0]);
    console.log('array2 :', arr2[i][0]);
    lib.newLine(1);
  }
  return newMatrix;
}

console.log(matrixAddition(matrixA, matrixB));
  // [[11, 6], [7, 7]]
//console.log(matrixAddition(matrixA, matrixC));
  // [[1, 5], [4, 6]]
//console.log(matrixAddition(matrixB, matrixC));
  // [[8, 1], [3, -1]]
//console.log(matrixAddition(matrixD, matrixE));
  // [[2, -5], [19, 14], [6, 4]]
/*
A = [ [2, 5], [4, 7]];
B = [ [9, 1], [3, 0]];
*/
// ---- //
lib.end();
// ---- //
