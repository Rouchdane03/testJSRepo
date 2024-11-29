/* Functions
 ** set of statement that perform a task or calculate a value
 ** we gonna write a lot of functions wwhile building an app
 ** we also have lot of built-in functions in JS
 */

 //1- example of a function that takes 2 numbers and return the additionnal value
 function addNumbers(n1,n2){
    var addition = n1 + n2;
    return addition;
 }

 var result = addNumbers(4,12); //il rentrera pas dans la fonction tant qu'on l'apelle pas
 console.log(result);

//2- ------------------>BUILT-IN FUNCTIONS<------------------------
var person = {
    name: "rouch"
}
console.log(Object.values(person));//values est une méthode déjà intégré(built-in method)
console.log(Object.keys(person));

console.log("rouch".toLocaleUpperCase());


//3------------------------->FUNCTIONS OVERVIEW<-------------------------
//name : camelCase
function getBrand(brand){
return {
    brand: brand,
    website: `www.${brand}.com`
};
}
const brand = getBrand("nike");
console.log(brand);
//formattage
console.log(JSON.stringify(brand,null,1));


//Refacto function naming: regular function
const getMe = function(name){
    return {
        nom: name,
        site: `www.${name}.com`
    };
}
const me = getMe("rouch");
console.log(me);
console.log(JSON.stringify(me,null,1));