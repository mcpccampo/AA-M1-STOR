function maxValue(nums) {
  if (nums.length === 0) {
    return null;
  }

  let maxVal = nums[0];

  for (let num of nums) {
    if (num > maxVal) {
      maxVal = num;
    }
  }
  return maxVal;
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
