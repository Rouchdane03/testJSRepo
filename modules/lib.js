const BRAND = {
    brand: "rouch",
    website: "rouch.com"

};

export default BRAND;//on ne peut qu'avoir un seul 'export default' dans tous les fihciers

//named exports and imports : we can have many named exports and imports as we want
//export const add = (a,b) => a+b;
//export const subtract = (a,b) => a-b;


//another way to named export
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
export { //the better way, just in one single line
    add,
    subtract,
    BRAND as brand //to rename an export
};
