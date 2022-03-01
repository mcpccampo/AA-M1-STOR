function strangeSums(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j];

      if (checkSum(num1, num2, 0)) {
        counter++;
      }
    }
  }
  return counter;
}
function checkSum(num1, num2, target) {
  if (num1 + num2 === target) {
    return true;
  } else {
    return false;
  }
}

console.log(strangeSums([2, -3, 3, 4, -2])); // 2
console.log(strangeSums([42, 3, -1, -42])); // 1
console.log(strangeSums([-5, 5])); // 1
console.log(strangeSums([19, 6, -3, -20])); // 0
