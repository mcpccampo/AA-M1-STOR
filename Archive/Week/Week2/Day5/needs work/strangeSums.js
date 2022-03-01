console.clear();

/* :: */ console.log('... script starts ...');

function strangeSums(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    //console.log('inner loop')
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j];
      //console.log('numb 1 |2 - ', num1, num2)
      if (checkSum(num1, num2, 0)) {
        counter++;
      }
    }
  }
  return counter;
}
function checkSum(num1, num2, target) {
  //console.log('num1 : num2 : sum : target  ',num1,num2,num1 + num2, target,num1 + num2 === 0)
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
console.log(strangeSums([9])); // 0

console.log('... script ends ...');
