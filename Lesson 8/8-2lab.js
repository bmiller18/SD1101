"use strict"
function myFirstFunction(){
  console.log("Hello World");
}

myFirstFunction();

function addNumbers(number1, number2){
  let results = number1 + number2;
  return results;
}

var exercise2 = addNumbers(10,18);
console.log(exercise2);

var exercise3 = addNumbers(6487,9652);
console.log(exercise3);

function sayHello(name){
  let results = "Hello, " + name + " I am JavaScript."
  return results;
}

var exercise5 = sayHello("Brittany");
console.log(exercise5);