/* Object Destructing
 ** 
 */
 const aPerson = {
     firstName: "Rouchdane",
     age: 21,
     isMaleGender: true,
     poids: 66,
     dob: new Date(2003,3,19).toJSON(),  //toJSON() allows you to add date into a json object
     address: {
         rue: 6,
         voie: "rue du madrillet",
         codePostal: 44000,
         ville: "Nantes"
     },
     toString: function(){
         return `Name: ${this.firstName} Age:${this.age}`
     }
 };
 
//const firstName = aPerson.firstName;
//const age = aPerson.age;
//const poids = aPerson.poids;

//SPREAD OPERATOR: a really cool feature on JS that allow us to pull values 
//from objects in one single line

const {firstName, age, poids, address:{ rue:voie }} = aPerson; //this is used quite a lot with React
//we can rename also the extracted property


console.log(age);
console.log(poids);
console.log(firstName);
//console.log(rue);
console.log(voie);