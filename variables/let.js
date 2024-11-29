/* Let  
 ** : the better way to declare js variable
 ** allow to to prevent hoisting
 */

//using var
for(var i= 0; i<=8; i++){
    console.log(i);
}
console.log("value of i outside the for loop: "+i);//i = 11

//using let
for(let e= 0; e<=8; e++){
    console.log(e);
}
console.log("value of e outside the for loop: "+e);//ne reconnait pas e, hoisting it's not taking place here anymore