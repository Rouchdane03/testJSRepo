/* Spread Operator Object
 ** 
 */
 const aPerson = {
    firstName: "Rouchdane",
    age: 21,
    isMaleGender: true,
    poids: 66,
    dob: new Date(2003,3,19).toJSON(),  //toJSON() allows you to add date into a json object
    toString: function(){
        return `Name: ${this.firstName} Age:${this.age}`
    }
};


 const address = {
    ville: "Nantes",
    codePostal: 44000  
};

//without spread operator
const combinedObject = {
    firstName: aPerson.firstName,
    address: {
        ville: address.ville,
        codePostal: address.codePostal
    }
};
//console.log(combinedObject);


//with spread operator
const combinedObjectUsingSpreadOperator = { //this will combine all properties of the 2 objects
    ...aPerson,
    ...address,
};
console.log(combinedObjectUsingSpreadOperator);

//on peut meme formater l'objet à construire
const example = { 
    ...aPerson,
    habitation: {...address},
};
console.log(example);
