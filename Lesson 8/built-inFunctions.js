'use strict'
//Replace Example
let orgText = "The brown fox jumped over the lazy dog."
let newText =orgText.replace("dog", "cat");
console.log(newText);

//Index Of Example
let position = orgText.indexOf("b");
console.log(position);
//b is the 4th index. Indexes start a 0, not 1.
//T = 0
//h = 1
//e = 2
//space = 3
//b = 4
let whereIsOver = orgText.indexOf("over");
console.log(whereIsOver);
//the text "over" is the 21st index of the string.

let mySlice = orgText.slice(4,9)
console.log(mySlice)
//we can slice out the text "brown" by slicing index 4 to 9.
//slice does not take the ending index, it stops 1 index before.

//Split example
let words = orgText.split(" ");
console.log(words);
//We split the text on each space, and are left with an array of words

//Reverse Example
console.log(words.reverse());


//Real world example
//The function checks for spam by checking certain words are in the text.
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
//True, it's spam.
console.log( checkSpam('free xxxxx') );
//True, it's spam.
console.log( checkSpam("Job Interview Next Week") );
//It's not spam!