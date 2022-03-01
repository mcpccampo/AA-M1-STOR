// your code here
function avgVal(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  if (sum) {
    return sum / arr.length;
  } else {
    return null;
  }
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
