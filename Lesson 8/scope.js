"use strict"

///Scope

var myNumber = 5;
//global variable

function useAGlobal (number){
  let result = myNumber + number;
  return result;
}

function scopeExample(){
  //console.log(myNumber);
  var scopedVariable = "I was created inside of Scope()";
  var results = scopedVariable;
  return results;

}

var exampleScope = useAGlobal(10);
console.log(exampleScope);

var returnedValue = scopeExample();
console.log(returnedValue);