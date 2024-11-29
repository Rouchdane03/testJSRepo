/* Strings
 ** allow u to store a sequence of characters
 ** on a plusieurs methodes intégrées à la classe ou au datatype String
 ** we gonna use it quite a lot in JS
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 ** 
 */

 var firstName = "Rouchdane";
 var brand = "rouchBrand";

console.log("i am: ",firstName);
console.log(typeof firstName);

console.log(typeof brand);
console.log(brand.length);

//------>format brand to lowercase and UpperCase
console.log(brand.toLocaleLowerCase());
console.log(brand.toLocaleUpperCase());

//------>extract string from string
console.log(brand.substring(0,5));

//concatenate 2 strings
console.log(firstName + brand);
console.log(firstName + " " + brand);
console.log(`${firstName}${brand}`);
console.log(`${firstName}  ${brand}`);//on peut add des espaces
console.log(`${firstName}${brand.toLocaleUpperCase()}`);




