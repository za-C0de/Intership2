// import axios from 'axios'
import quotesData from '../data/animeQuotes.json'

export default async function fetchQuotes(limit = 25 , skip = 0){
    // try{
    //     const response = await axios.get(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`);
    //     // console.log(response.data);  // this is for testing
    //     return response.data.quotes; // array of quotes object
    // }catch(error){
    //     console.error(`their is something wrong with this code : ${error}`)
    //     return null
    // }
    try{
         return quotesData.slice(skip, skip + limit); // array of quote objects
    }catch(error){
        console.error(`their is something wrong with the api or in the code : ${error}`)
        return null
    }
}
