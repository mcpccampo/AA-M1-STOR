// your code here
function removeEWords(sentence) {
  let stringArray = sentence.split(' ');
  let newString = '';

  for (let i = 0; i < stringArray.length; i++) {
    if (!stringArray[i].includes('e')) {
      newString += stringArray[i] + ' ';
    }
  }

  return newString;
}

console.log('test...', removeEWords('What time is it everyone?')); // 'What is it'
console.log('test...', removeEWords('Enter the building')); // 'building'
