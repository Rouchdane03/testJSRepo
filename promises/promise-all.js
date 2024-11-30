/* Promise.all return a promise
 ** takes an Array of promises and return an array of result
 ** for each promise you've parsed in
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
 const fetchData = async()=>{
     Promise.all([customers,addresses]).then(values=>{//use this when i want all or Nothing
        const [c,d] = values
        console.log(c);
        console.log(d);
     }).catch(err=>{
        console.log(err);
     })

 };
 */

 const fetchData = async()=>{ // Promise.all with await

    try { 
        //use this when a value depend on another one
        //otherwise if there is nothing that linked them, use Promise.all  
    // const c = await customers; 
    // const a = await addresses;

     const values  = await Promise.all([customers,addresses]);//s'execute en parallèle(car zéro dépendance)
     const [c,d] = values
        console.log(c);
        console.log(d);

    } catch(error){
        console.log(error);
    }
 };





fetchData();

