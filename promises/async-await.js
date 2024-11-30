/* Async await
 ** 
 ** 
 */

 const customers = new Promise((resolve,reject)=>{

    return Promise.resolve().then(()=>{
        let i =0;
        while(i<2_000_000_000){
           i++;
        }
        resolve([
            {name:'rouch',id: 1},
            {name:'jack',id: 1}
        ]);
    })
});



const addresses = new Promise((resolve,reject)=>{

    return Promise.resolve().then(()=>{
        reject("oops error")
        let i =0;
        while(i<2_000_000_000){
           i++;
        }
        resolve([
            {customerId:1,address: "london"},
            {customerId:2,address: "manchester"}
        ]);
    })
});
/*
const fetchData = ()=>{
   customers.then(c=>{
        addresses.then(a=>{
            console.log(c);
            console.log(a);
        }).catch(errA=>{
            console.log(errA);
        })
   }).catch(errC=>{
    console.log(errC);
   });
};
*/


//let's refacto the last code by using async await 
const fetchData = async()=>{ //async keyword allow us to use await keyword

    try {   //best approach
     const c = await customers; //il bloquera la suite jusqu'à ce qu'on ait toutes les valeurs de c(customers)
     const a = await addresses;

     console.log(c);
     console.log(a);

    } catch(error){
        console.log(error);
    }
 };
 
fetchData();