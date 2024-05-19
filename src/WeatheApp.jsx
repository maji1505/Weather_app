import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox";
import "./WeatherApp.css"


export default function WeatherApp(){
let [info,setInfo]=useState({
    city:"WanderLand",feelsLike:24.84,
    temp:25.05,tempMin:25.05,tempMax:25.05,
    humidity:47,weather:"haze",
});
    return(
        <div className="WeatherApp">
            <h2>Weather App by Kushal</h2>
        <SearchBox setInfo={setInfo}/>
        <InfoBox info={info}/>
        </div>
    )
}