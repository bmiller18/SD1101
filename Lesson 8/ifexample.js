"use strict";

let sky = 'blue';
let weather = 'cloudy';

if(sky =='blue' && weather =='sunny'){
  console.log("It's a beautiful day!")
} //checking both variables two conditions must be true

else {
  console.log("Either the sky is blue or the weather is sunny")
}

if(sky=='blue'){
  console.log('The sky is blue during the day.');
} //... but don't stop, test this next!
else if(sky=='black'){
  console.log('The sky is black at night.')
}

else{
  console.log('The sky isn\'t blue or black. Something is very wrong!');
}

//= ASSIGNMENT, SETS the value (changes)
//== COMPARSION, ASKS is the variable equal to something else

let beachball = 'yellow';

if(sky == beachball) {
console.log("These two variables have the same values");
}

var someNumber = 80;
var anotherNumber = 80;

if (someNumber > anotherNumber) {
  console.log(someNumber + " is greater than " + anotherNumber);
}

if (someNumber < anotherNumber) {
  console.log(someNumber + " is less than " + anotherNumber);
}

if (someNumber <= anotherNumber) {
  console.log(someNumber + " is less than or equal to " + anotherNumber);
}

if (someNumber == anotherNumber) {
  console.log(someNumber + " is equal to " + anotherNumber);
}

//Bit if that wasn't true....
else
{
  console.log("These numbers are not equal")
}



