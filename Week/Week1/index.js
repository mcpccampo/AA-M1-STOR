console.clear()

function strFormat(word, operation) {
  let newWord = '';

  if (operation === 'caps') {
    newWord = word[0].toUpperCase() + word.slice(1);
  } else if (operation === 'upper') {
    newWord = word.toUpperCase();
  } else if (operation === 'dup') {
    newWord += word;
  } else if (operation === 'backwards') {
    for(let i = word.length -1 ; i >= 0; i--){
      newWord += word[i]
    }
  } else {
    newWord = word;
  }
  return newWord;
}

let score = 0;

if (strFormat('foo', 'caps') === 'Foo') score++;


console.log('test  ->', strFormat('foo', 'caps'));
console.log('grade ->', score);
