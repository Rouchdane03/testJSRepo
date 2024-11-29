/* Arrays-map.js
 ** loop through an array
 ** allow to perform transformation through loop
 */

const numbers = [1,2,3,4,5];

numbers.forEach(n=>{
    console.log(n);
});
console.log(numbers[3]);
numbers[3] = 8;
console.log(numbers[3]);

//we can add item to a table by using push method
numbers.push(17);
console.log(numbers);

//deleting item

const indexOfFive = numbers.indexOf(5);
console.log(indexOfFive);

numbers.splice(indexOfFive,1);//2 parameters, the index to delete and how many numbers starting from that index
console.log(numbers);

const numbersTimesTwo = numbers.map(n=>n*2); //will use it quite a lot in React or VueJS
console.log(numbersTimesTwo);
