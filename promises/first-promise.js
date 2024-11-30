/* Promises
 ** 
 ** 
 */
console.log("synchronous 1");

/*
const promise = new Promise((resolve,reject)=>{
    //the resolve is for when the promise resolve sucessfully then ⬇️
    setTimeout(()=>{ //execute a piece of code after some time
        resolve("data back from the sever")
    },8000); //3secs, 3000ms


     //the reject is for when the promise resolve unsucessfully then ⬇️
    setTimeout(()=>{ //execute a piece of code after some time
        reject("failed to get data from the server")
    },10000); //3secs, 3000ms
});
*/
const promise = new Promise((resolve,reject)=>{

    return Promise.resolve().then(()=>{
        let i =0;
        while(i<1_000_000_000){
           i++;
        }
            resolve("data back from the sever");
    })
});


promise.then(res=>{ //par défaut il s'éxecute en mode async
    console.log(res);
}).catch(err=>{
    console.log(err);
}).finally(()=>{       //the finally is optional
    console.log("done");
})

console.log("synchronous 2");

//----------------------->notes<-----------------------
//le Promise ne bloque pas l'exécution de la suite d'un code
//if you want to perform asynchronous(async) computation, use promise
//always use promises the right way cause you'll think you are performing async computation but in fact u aren't
//c'est le mot clé resolve qui fait de la méthode un type async. Donc le code le rencontre il se dit ah
//je dois continuer mon chemin et revenir vers toi après.


