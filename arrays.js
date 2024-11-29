/* Arrays
 ** represent list of values
 */

var names = [
    "rouch",
    "john",
    "joe",
    "joel"
];

//display an array
console.log(names);

//display one item in an array (index start from zero: 0)
console.log(names[0]);
console.log(names[0]+names[2]);
console.log(`${names[0]}${names[2].toLocaleUpperCase()}`);

//size of an array
console.log("size equals to:"+names.length); //on peut use l'operateur + ou , pour affecter la valeur au message

//affichage de l'index d'une valeur
console.log(names.indexOf("joe"));


