// Api from rapid api that accpets Logitude and Latitude to return list restraunts 
// Only 500 requests free per month
import axios from "axios"
const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'
const options = {
    params: {
      latitude: '32.946552',
      longitude: '73.726053 '
    },
    headers: {
      'X-RapidAPI-Key': '6af836be04mshdc94d4eb456a627p1b025cjsn2c55038ad339',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
    
  export const getPlacesData= async()=>{
    const {data:{data}} = await axios.get(URL,options);
    return data;
    try{

    }catch(error){

    }
}