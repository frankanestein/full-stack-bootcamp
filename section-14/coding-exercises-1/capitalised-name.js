var name = prompt("What is your name?");
var firstChar = name.slice(0,1).toUpperCase();
var remainChar = name.slice(1).toLowerCase();
alert("Your name is " + firstChar + remainChar)