/* Callbacks
 ** it's a function which is parsed as argument to another function
 ** it's a function parsed as an argument to another function
 */

const greetUser= (username, callback)=>{ //callback ici c'est juste le nom de la fonction
    if(callback){
        console.log(callback(username));
    }else{
        console.log(username);
    }
 }

const cb = username =>
    {
      return "hello " + username;
    };
 greetUser("rouch",cb);

 

