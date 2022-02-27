function twoSumIntermediate(arr, target) {
  arr.sort(); // [0,1,2,3,7]  o(n log n)

  let leftCount = 0;
  let rightCount = arr.length - 1;

  let leftPointer = arr[leftCount]; // 0
  let rightPointer = arr[rightCount]; // 7

  for (let i = 0; i < arr.length; i++) {
    // o(n) iterate through n once
    if (leftCount >= rightCount) {
      return false;
    }
    if (leftPointer + rightPointer === target) {
      return true;
    } else if (leftPointer + rightPointer > target) {
      rightCount--;
      rightPointer = arr[rightCount];
    } else if (leftPointer + rightPointer < target) {
      leftCount++;
      leftPointer = arr[leftCount];
    }
  }
  return false;
}
