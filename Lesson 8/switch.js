"use strict"

let sodaFlavor = 'orange';
switch(sodaFlavor){
  case 'strawberry':
    console.log('Strawberry Flavored Soda');
    break;
  case 'apple':
    console.log('Apple Flavored Soda');
    break;
  case 'orange':
    console.log('Orange Soda');
    break;
  case 'grape':
    console.log('Grape Soda');
    break;
}

for (let i = 1; i < 6; i++) {

  if(i == 3){
    console.log("i is equal to 3. Skipping ahead.")
    continue;
  }

  console.log("Loop has ran " + i + " times.");

}