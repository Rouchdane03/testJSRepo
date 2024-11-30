import axios from "axios";

/*
axios.get("https://api.chucknorris.io/jokes/random")
    .then(res=>{
       console.log(res.data)})
    .catch(err=>{
       console.log(err);
})
*/
const getJokes = async(url)=>{
    try{
          const response = await axios.get(url);
          console.log(response.data);
    }catch(error){
          console.log(error);
    }
}

getJokes("https://api.chucknorris.io/jokes/random");

console.log("moi dabord");