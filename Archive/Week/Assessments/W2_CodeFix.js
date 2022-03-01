const lib = require('../../../modules/lib');
lib.start();

/*
  function evenNumbersBelow() returns an array containing all even integers below
  than that number, ordered from lowest to highest.
  Zero is considered positive.
  Unfortunately, the code is not working correctly.
*/

function evenNumbersBelow(num) {
  let arr = [];
  for (let i = 0 ; i < num ; i += 1) {
      if(i % 2 === 0){
        arr.push(i)
      }
  }
  return arr;
}

// Expected return values
console.log(evenNumbersBelow(0)); // []
console.log(evenNumbersBelow(6)); // [0, 2, 4]
console.log(evenNumbersBelow(7)); // [0, 2, 4, 6]
console.log(evenNumbersBelow(8)); // [0, 2, 4, 6]
//-------
lib.end();
