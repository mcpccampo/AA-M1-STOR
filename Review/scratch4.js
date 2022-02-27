console.clear()

function rotateLeft(array, num){
  let numb = Math.abs(num)
  let removedItems = array.splice(numb)
  array = [...array,...removedItems]
  return array
}

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];

console.log('orig array  :', animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat'
animals = rotateLeft(animals, -2);
console.log('after array :', animals);

console.log('....')
