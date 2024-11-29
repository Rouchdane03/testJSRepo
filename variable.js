/*
no need to specify the type of an JS variables
*/

var firstName = "Rouchdane";
var age = 21;
var isMaleGender = true;
var poids = 66;
var dob = new Date(2003,3,19); //the month start from 0: 0->January
var person = {};
var empty = undefined;


//displaying all properties and their datatypes

//1 
console.log("i am: ",firstName);
console.log(typeof firstName);

//2
console.log(age);
console.log(typeof age);

//3
console.log(isMaleGender);
console.log(typeof isMaleGender);
//4
console.log("il fait",poids,"kg");
console.log(typeof poids);
//5
console.log("suis né le ",dob);
console.log(typeof dob);
//6
console.log(person);
console.log(typeof person);
//7
console.log(empty);
console.log(typeof empty);