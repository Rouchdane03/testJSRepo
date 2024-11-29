/* Loops
 ** allow us to execute the piece of code over and over until a condition is met/reached
 */

//let's create a loop that prints number from zero 0 to 100
for(var i= 0; i<=8; i++){
    console.log(i);
}

//1 let's loop through an array
var names = [
    "rouch",
    "john",
    "joe",
    "joel",
    "isaac"
];

for(var index= 0; index<names.length; index++){
    console.log("value "+index+" : "+names[index]);
}

//2 ------------------>Other types of loops<-------------------

//a- THE forEach LOOP
//il parcours directement la iste des valeurs, pas besoin de compteur à déclarer
console.log("forEach loop: ");
names.forEach(element => {
    console.log(element);
});

//b- for Of LOOP
console.log("for of loop: ");
for (const name of names) {
    console.log(name);
}

//3 ------------------>WHILE LOOP<-------------------
//loop till a certain condition IS FALSE

var condition = true;
while(condition){         //while true always runs till forever but while false never run.
    console.log("hellooo");
   condition = false;
}

var number = 0;
while(number<5){        //while condition is true the lopp always runs till he is false and he will not run again.
    console.log("alright");
    number++;
}

var i = 0;
while(i<names.length){        //while condition is true the lopp always runs till he is false and he will not run again.
    console.log(names[i]);
    i++;
}






