/* Ternary if
 ** allow us to 
 */

 var number = 3;

 //verifer si ce nombre est pair ou impair
 if(number%2 == 0){
 console.log("pair");
 }
 else{
    console.log("impair");
 }


 //we can replace all of this a ternary if statement(pas conseillé , hard to debug)
 //mais pour les petits scénarios commme ci-dessous, on peut l'utiliser
 var result = number%2 == 0 ? "pair" : "impair"; //if true, return the first value else the second one
 console.log(result);






 
 