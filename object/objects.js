/* Objects
 ** an object is a colection of properties
 ** we gonna use them quite a lot in JS
 */

 //let's create an object
 var person = {
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
      }
 };

 console.log(person);

 //we can also access all properties of an object:
 //example
 console.log(person.address);
 console.log(person.address.voie);

 //return list of all values(only values not keys values) of an object
 console.log(Object.values(person));

 //return list of keys (only keys not values) of an object
 console.log(Object.keys(person));

 //stringify an object
 console.log(JSON.stringify(person));




//------------------------------->WORKING WITH OBJECT<-------------------------------
//let's learn more about object
console.log("NEW SECTION");
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
//add properties
aPerson["grade"] = "C"; //ou ⬇️
aPerson.lastName= "phil";
//deleting properties
delete aPerson.lastName;
delete aPerson["grade"];

console.log(aPerson.toString());
//console.log(aPerson);

Object.keys(aPerson).forEach(element => {
    console.log(element);
});