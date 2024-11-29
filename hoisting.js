/* Hoisting
 ** let's understand here why using 'var' keyword is bad practice
 ** and how to solve it
 ** 'var' is the old way of declaring a variable
 ** code using 'var' is nowadays is typically the old version of JS
 */


//let's see why var is bad practice
for(var i= 0; i<=8; i++){
    console.log(i);
}
console.log("value of i outside the for loop: "+i);

/* le seconde console.log affichera 9
 c'est ce qu'on appelle du hoisting
 en effet, l'interpreteur JS déclara les variables var en haut du fichier et ils sont 
 ce faisant accessibles dans toute la suite du programme.
 Mais nous on veut pas cela. On veut que notre variable i soit seulement accessible 
 par notre boucle for
 */

