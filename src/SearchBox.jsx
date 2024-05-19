import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({setInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="848bc516ddcee79be3448b60ff4c6b58";

let getWeatherInfo=async()=>{
    try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonResponse=await response.json();
//    console.log(jsonResponse);
   let result={
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,

   }
   setInfo(result);
   setError(false);
//    console.log(result)
    }
    catch(err){
        console.log(err)
    setError(true);
    }
   
}

let handleChange=(event)=>{
    setCity(event.target.value);
}

let handleSubmit=(event)=>{
    event.preventDefault();
    // console.log(city);
    setCity("");
    getWeatherInfo();
}

    return(
<div className='SearchBox'>
    <form action="" onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="City Name" className="serch" variant="outlined"
     onChange={handleChange} value={city} required />
    <br /><br />
    <Button variant="contained" type="submit">Search</Button>
    </form>

    {error && <p className="error">No such place exists!</p>}
</div>
    );
}