/* arrow Functions
 ** prettier way to create function
 */

//Refacto function naming: another way TO CREATE FUNCTION IN JS: Its' Regular function
const getMe = function(name){
    return {
        nom: name,
        site: `www.${name}.com`
    };
}
const me = getMe("LM10");
console.log(me);
console.log(JSON.stringify(me,null,1));


//let's transform this by using arrow functions : It's Arrow functions, THE RIGHT WAY TO CREATE FUNCTION IN JS
const getMeA = (name)=>{
    return {
        nom: name,
        site: `www.${name.toLocaleLowerCase()}.com`
    };
}
const me2 = getMeA("RAouch");
console.log(me2);
console.log(JSON.stringify(me2,null,1));

//on peut se passer du return et des parenthèses sur les paramètres quand a un seul attrubut
const getMeB = name=> ({
        nom: name,
        site: `www.${name}.com`});

const me3 = getMeA("adissa-béba");
console.log(me3);
console.log(JSON.stringify(me3,null,1));

//example multiplication of two numbers
const result = (x,y)=>{
    return {
        firstNumber: x,
        secondNumber: y,
        multiplication: x * y
    }
}
console.log(result(3,2));
console.log(JSON.stringify(result(3,2),null,1));


const calculMaths = (n1,n2,operator)=>{
    let resultat = 0;
    switch(operator){
     case "+":
        resultat = n1 + n2;
        break;
     case "-":
        resultat = n1 - n2;
        break;
     case "*":
        resultat = n1 * n2;
        break;
     case "/":
        resultat = n1 / n2;
        break;
    default:
        console.log("rien du tout");
    }
    return resultat;
}
console.log(calculMaths(2,5,"*"));

//CONCLUSION
//USE ARROW FUNCTIONS TO CREATE FUNCTION