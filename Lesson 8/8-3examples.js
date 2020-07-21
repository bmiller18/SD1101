"use strict"

//methods
var myString = "The Cat In The Hat";
var newString = myString.replace("Hat", "Box");
console.log(myString);
console.log(newString);//changing words within string

var newString2 = myString.split("Cat");
console.log(newString2);
console.log(newString2[0]);
console.log(newString2[1]);//spliting string

var mySlice = myString.slice(4,7);
console.log(mySlice); //slicing string

var someIndex = myString.indexOf("In");//first position
console.log(someIndex);

var doesInclude = myString.includes("Cat");
console.log(doesInclude);//does the string include CASE SENSATIVE
