function uncompress(str) {
  let string = '';
  let strArray = str.split('');

  for (let i = 0; i < strArray.length; i += 2) {
    let letter = strArray[i];
    let multiplier = parseInt(strArray[i + 1]);
    string += letterMultiplier(letter, multiplier);
  }
  return string;
}
function letterMultiplier(letter, multiplier) {
  let str = '';
  for (let i = 1; i <= multiplier; i++) {
    str += letter;
  }
  return str;
}
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
