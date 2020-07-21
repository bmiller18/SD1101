"use strict"

var someNumber = 10;

var myFirstArray = [1,8,12,52,64,18,9,4,6,-1,-18,2.22,44];

for (var i = 0; i < myFirstArray.length; i++)  //start our loop
{
  console.log(myFirstArray[i])
}
//for loop
for (var counter = 1; counter <= 5; counter++ )
{
  console.log("This loop has run" + counter + "times");
}

for(var MagicWord in myFirstArray)
{
  console.log(myFirstArray[MagicWord]);
}
//Not everything can be iterrated (moved thru) with the in keyword

let x = 1
while(x < 10)
{
  console.log("loop has run " + x + " times")
  x++
}

/*while(1==1)
{
  console.log("forever");
}
*/
//This is an endless loop!! Will print forever and cause computers to crash!

