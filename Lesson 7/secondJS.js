"use strict"

var y = 5;
y += 3; //y = y+current value
console.log(y);

var x = 10;
x = x + 5;
x += 5;
console.log (x);

var a = 5 //set a equal to 10
var b = 10 // set b equal to 10
if (a != b) //is a the same as b?  ==
{console.log('a is not equal to be')}

// '===' equal to - same value and same data types
// '=='  equal to - same value
// '!=' not equal to

var someNumber = 10; //this is a number
var someText = "15"; //this is text
console.log(someNumber + someText);
//result = 1015

console.log(someNumber + Number(someText));
//result = 25

console.log("Treat these variables as text: " + String(someNumber) + " & " + String(someText));
//Treat these variables as text: 10 & 15