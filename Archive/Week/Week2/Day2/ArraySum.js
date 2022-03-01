function sumArray(arr){
  let sum = 0;
  for(let n of arr){
    sum += n
  }
  return sum
}

console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0
