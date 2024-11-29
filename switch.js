/* Switch
 ** allow us to 
 ** 
 */

 var gender = "M";

 if(gender=="M"){
    console.log("Male");
 }
 else if(gender=="F"){
    console.log("Female");
 }
 else{
    console.log("Unkown");
 }

//lets's transform theses statements to switch statement

switch(gender){

   case "M":
        console.log("he is male");
        break;     //it's important to stop use it, cause it will stop the statement to execute

   case "F":
        console.log("he is female");
        break;

   default:
        console.log("unknown");
}
