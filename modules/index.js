import recupBrand,
      // {add,subtract} 
      * as lib //this means export all named export as Lib: c'est pratique pour éviter de tout lister
from './lib.js'   //on donne un nom propre à nous à la variable importé dans notre classe
console.log(recupBrand);
console.log(lib.brand);
console.log(lib.add(7,5));
console.log(lib.subtract(14,6));