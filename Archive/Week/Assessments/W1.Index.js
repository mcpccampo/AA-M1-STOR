
function stringChanger(word, operation) {
  let newWord = word;
  switch(operation){
      case 'capitalize':
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
        console.log(newWord)
        break;
      case 'uppercase':
        newWord = newWord.toUpperCase();
        console.log(newWord)
        break
      case 'double':
        newWord += newWord
        console.log(newWord)
        break
      case 'reverse':
        for(let i = word.length; i < 0; i--){ newWord += word[i]}
        console.log(newWord)
      break
      default:
        console.log('undefined')
  }
  return newWord
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;
