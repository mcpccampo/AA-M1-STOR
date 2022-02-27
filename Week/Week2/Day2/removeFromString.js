console.clear();
// write a function that removes all of consonants from a string
// use array.splice
// returns newString

function removeStringConsonants(string) {
  let newArray = [];
  let vowels = 'aeiouAEIOU';

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i]) || string[i] === ' ') {
      newArray.push(string[i]);
    }
  }

  return newArray.join('');
}


console.log(remStrConsonants('the quick brown fox'));
