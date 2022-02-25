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
