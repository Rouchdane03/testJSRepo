/* Default parameters
 ** allow us to assign default parameters to our functions
 */

 const getMeA = name=> ({
    nom: name,
    site: `www.${name.toLocaleLowerCase()}.com`});

const me3 = getMeA("adissa-béba");
console.log(me3);
console.log(JSON.stringify(me3,null,1));

//let's refacto this arrow function by using default parameter
const getMeB = (name= "Hello")=> ({ //here we specified a default parameter value as "Hello"
    nom: name,
    site: `www.${name.toLocaleLowerCase()}.com`});

const me1 = getMeB(); //will throw an error if any default parameter value is not specified 
console.log(me1);
console.log(JSON.stringify(me1,null,1));

//we can also parse anything as default value for a parameter
