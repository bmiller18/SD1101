"use strict";

var animals = ['Lion', 'Tiger', 'Zebra', 'Donkey', 'Catfish'];

console.log(animals);

var numbers = ['42', '8', '12', '30'];

console.log(numbers);

var myTiger = animals[1];

console.log(myTiger);

var meaningOfLife = numbers[42];

console.log(meaningOfLife);

var mixedData = ['101', 'Dog', '6', 'George Washington', true, null];

console.log(mixedData);

animals[5] = 'Cobra';

console.log(animals);

mixedData[6] = animals[3];

console.log(mixedData);

animals.pop();

console.log(animals);

animals.push('Shark');

console.log(animals);

var myLion = animals.shift()

console.log(myLion);

console.log(animals);

animals.unshift(myLion);

console.log(animals);