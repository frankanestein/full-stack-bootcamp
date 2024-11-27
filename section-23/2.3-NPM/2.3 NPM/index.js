// var generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
var superHeroName = superheroes.random();

console.log(`My name is ${sillyName}`);
console.log(`My superhero alias is ${superHeroName}`); 

// Had to go to version 3 to follow Angela's course. 
// Version 4 wasn't behaving, getting legged up by with keyword