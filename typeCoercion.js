/* TypeCoercion
 ** how to perform equality when wworking with JS
 ** it's a process of converting one datatype to another
 */
 console.log("with type coercion");
console.log(0 == false); //return true because in computing false has value of zero 0
console.log(0 == true);

console.log("0" == false);
console.log("0" == true);

console.log("1" == 1);

console.log(1 == true);

// on peut dire à javascript de ne pas faire éviter à JS de faire le type coercion
//POur cela nous allons utiliser ⬇️

//------------------------>TRIPLE EQUALS<--------------------
//let's retry without type coercion  by using type coercion
console.log("without type coercion");
console.log(0 === 0); 
console.log(0 === true);

console.log("0" === false);
console.log("0" === true);

console.log("1" === 1);

console.log(1 === true);

