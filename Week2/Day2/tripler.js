// your code here
function tripler(nums) {
  let newArray = [];
  for (let num of nums) {
    newArray.push(num * 3);
  }
  return newArray;
}
console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
