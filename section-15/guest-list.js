var guestList = ["Kane","Rebs","Hal","Josie","Mark","Fin"];

var guest = prompt("What is your name?");

if (guestList.includes(guest)) {
    console.log("Welcome!");
} else {
    console.log("Sorry, maybe next time");
}