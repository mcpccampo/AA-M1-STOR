const lib = require('../modules/lib');
lib.start();

/*
  Zip up an array of inputs.
  Input === an array of elements.

  Output === an array of subarrays containing the the element and an index marker.

  Examples:
  I: [1,2,3,4] -> O: [[0,1], [1,2], [2,3], [3,4]]
  I: ["Tom", "William", "Phillip"] -> O: [[0, "Tom"], [1, "William"], [2, "Philip"]]

  */

function zipUp(array) {
  let data = [];
  for (let index in array) {
    data.push([index, array[index]]);
  }
  return data;
}

zipUp([1, 2, 3, 4]);
zipUp(['Tom', 'William', 'Phillip']);

lib.end();
