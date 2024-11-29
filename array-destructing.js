/* Arrays Destructing
 ** 
 */

 const names = [
    "rouch",
    "john",
    "joe",
    "joel",
    "adiss"
];
//const joel = names[3];
//const joe = names[2];
//const john = names[1];

//console.log(joel);
//console.log(joe);

//let's simplify this using array destructing
const [valueAtIndex0,valueAtIndex1,valueAtIndex2, ...rest] = names;            //it's saying to names table
// to return values at the specified to the variable we put

console.log(valueAtIndex0);
console.log(valueAtIndex2);
console.log(rest);

