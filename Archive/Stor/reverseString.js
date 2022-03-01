const lib = require('../modules/lib');
// ----------------------- //
lib.clear();

/*
   take a string and reverse it
*/ lib.start();

function reverseString(str){
   let newStr = ''

   for(let i = str.length -1 ; i >= 0; i--){
     newStr += str[i]
   }
   return newStr
 }

