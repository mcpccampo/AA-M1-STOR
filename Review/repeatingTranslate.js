function repeatingTranslate(sentence) {
  let stringArr = sentence.split(' ');
  let translated = '';
  let filter = 'aeiouAEIOU';

  for (let word of stringArr) {
    if (word.length < 3) {
      translated += word + ' ';
    } else {
      let lastChar = word[word.length - 1];
      if (filter.includes(lastChar)) {
        translated += repeatWord(word, 2);
      } else {
        translated += repeatLetter(word);
      }
    }
  }
  return translated;
}

function repeatLetter(word) {
  let newString = '';
  let index = -1;
  let wordArr = word.split('')
  let filter = ['a', 'e', 'i', 'o', 'u'];

  for(let i = 0; i < wordArr.length; i++){
    if(filter.includes(wordArr[i])){
      index = i
    }
  }
  newString = word + word.slice(index) + ' ';
  return newString;
}

function repeatWord(word, times) {
  let dupWord = '';
  for (let i = 1; i <= times; i++) {
    dupWord += word;
  }
  return dupWord + ' ';
}

console.log(repeatingTranslate('we like to go running fast')); // "we likelike to go runninging fastast"
console.log(repeatingTranslate('he cannot find the trash')); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate('pasta is my favorite dish')); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate('her family flew to France')); // "herer familyily flewew to FranceFrance"
console.log('');
