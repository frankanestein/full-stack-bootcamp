var message = prompt("Type your message here: ");
var charLimit = 140;

var messageLength = message.length;
var remainingChars = charLimit - messageLength;

alert("You have used " + messageLength + " characters, and have " + remainingChars + " remaining.")