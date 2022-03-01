function findBizzBuzz(num) {
  if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
    return true;
  }
}

let fizzBuzz = function (max) {
  let nums = [];
  for (let i = 1; i < max; i++) {
    if (findBizzBuzz(i)) {
      nums.push(i);
    }
  }

  return nums;
};

let findSumTarget = function (num1, num2, target) {
  return num1 + num2 === target ? true : false;
};

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    for (let j = 1 + i; j < arr.length; j++) {
      let num2 = arr[j];
      if (findSumTarget(num1, num2, target)) {
        return true;
      }
    }
  }
  return false;
}

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true

function getInitials(string) {
  let nameArray = string.split(' ');
  let initials = '';
  for (let name of nameArray) {
    initials += name[0].toUpperCase();
  }
  return initials;
}

function initials(name) {
  return getInitials(name);
}
// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'

let removeWord = function (word, filter) {
  let stringArray = word.split(' ');
  let newString = '';
  for (let word of stringArray) {
    if (!word.includes(filter)) {
      newString += word + ' ';
    }
  }
  return newString;
};

let removeWords = function (sentence) {
  return removeWord(sentence, 'e');
};

console.log(removeWords('What time is it everyone?')); // 'What is it'
console.log(removeWords('Enter the building')); // 'building'
