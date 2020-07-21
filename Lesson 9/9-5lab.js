"use strict"

function changeColorOnMouseOver1(){
  document.getElementById("divColorSimple").style.backgroundColor = "blue"
}

function changeColorOnMouseOut1(){
  document.getElementById("divColorSimple").style.backgroundColor = "red"
}

function ValidatePasswords(inputPass1, inputPass2){
  if (document.getElementById(inputPass1).value  == document.getElementById(inputPass2).value){
      alert("Congrats. Your passwords match.")
      document.getElementById(inputPass1).style.border = "1px solid green border"
      document.getElementById(inputPass2).style.border = "1px solid green border"
  }
  else {
      alert("Ooops, something went wrong. It looks like your passwords may not match. Please try again.")
      document.getElementById(inputPass1).style.border = "1px solid red"
      document.getElementById(inputPass2).style.border = "1px solid red"
      document.getElementById(inputPass1).focus();
  }   
}


function toggleBorder(){

  //alert("Hello from toggleBorder");

  if (document.getElementById("divAddListenerToggleBorder").style.border == '5px solid red'){         
      // alert("True hit: Hello from toggleBorder: changing to black");       
      document.getElementById("divAddListenerToggleBorder").style.border = '5px solid black';
  } else {
      // alert("False hit: Hello from toggleBorder: changing to red");
      document.getElementById("divAddListenerToggleBorder").style.border = '5px solid red';
  }

}

//HEADS UP: The function that added via addEventListener can not have (). It will not work if it has them. See below.
document.getElementById("divAddListenerToggleBorder").addEventListener('click', toggleBorder);

// 6. Use JS to accept an input and store it in session Storage.
// Note: As of Tues 7:30 4/21/2020, this was not working. TODO: Find bug.
function storeInBrowser(){
let storageItem = document.getElementById('inputStoreInBrowser').value;
// alert("Before storing: " + storageItem);
sessionStorage.setItem("storageItem", String(storageItem));
// alert("After storing: " + storageItem);
}