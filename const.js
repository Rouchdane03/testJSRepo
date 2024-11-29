/* Const
 ** : another better way to declare js variable
 ** but specifically to tell that no reassignment is allowed
 */


 //here are kind of some bad practice of assignements
 let brand = "rouchBrand";
 brand = {};
 brand = 10;
 brand = function() {
    return "brandNewMan";
 }
 console.log(brand());

 //let's fix the problem by using const
 const brand2 = "rouchBrand";
 //brand2 = {};           //will throw an error here, cause const mean no possibe reassignement
 //brand2 = 10;
 //brand2 = function() {
    //return "brandNewMan2";
 //}
 //console.log(brand2());

 const brandObject = {};
 brandObject["brandName"] = "rouchTech"; //i can add properties to const object but i am not allowed to completely reassign the object
 brandObject["turnover"]="14 billion";
 //brandObject = 1; //will throw error
 delete brandObject.brandName; //will delete key and value of a property
 console.log(brandObject);


 //>---------------------------when do i const or let<--------------------------------
// first of all it's recommand to declare all JS variable with 'const' 
// Then if you need reassignment, use 'let' keyword
// const: useful for functions which return single values
// 

const helloValue = function hello(){
    console.log("hello");
}
console.log(helloValue());
helloValue();

//never use var, you can forget it 
