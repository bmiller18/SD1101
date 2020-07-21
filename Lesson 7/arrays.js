"use strict"

var someNumber = 10;

var myFirstArray = [1,8,12,52,64,18,9,4,6,-1,-18,2.22,44];

console.log(myFirstArray[0]);
//first element in array is the value of 1, position 0, or INDEX 0
console.log(myFirstArray[1]);
console.log(myFirstArray[2]);
console.log(myFirstArray[10]);

var myFriendsList = ['John', 'Paul', 'Mark', 'Sarah'];
console.log(myFriendsList[2]);
//3rd element in the array is at INDEX 2, value of "Mark"

var mixedArray = [4, 'JavaScript', true, null]
console.log(mixedArray[1]);
console.log(mixedArray[2]);
//mixed data types array


console.log(myFirstArray.length);
console.log(myFriendsList.length); //gets number of items in array
console.log(myFriendsList[99]);
myFriendsList[99] = "My New Friends!"
console.log(myFriendsList.length); 
//SIZE of the array or LENGTH of the ARRAY --> how many items are in the array
//SIZE is IMMUTABLE IN MANY LANGUAGES
//BUT JAVASCRIPTIS FRIENDLY. ARRAYS CAN GROW IN SIZE
