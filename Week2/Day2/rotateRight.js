console.clear();

// your code here
let rotateRight = function (array, num) {
  let newArray = array.slice();

  for (let i = 0; i < num; i++) {
    let shiftValue = newArray.pop(i);
    newArray.unshift(shiftValue);
  }

  return newArray;
};

let rotate = function (array, num) {
  let index = array.length - num;
  let front = array.slice(0, index);
  let back = array.slice(index);

  return [...back, front]
};

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('test Case....>', rotate(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(' # Original', arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];

console.log('test case...>', rotate(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(' # Original', animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
