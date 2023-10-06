import React, { useEffect, useState } from "react";
import './Home.css';
import axios from "axios";
function Home(){
    const[city,setCity]=useState('Pune');
    const[temperature,setTemprature]=useState('0');
    const[humidity,setHumidity]=useState('0');
    const[message,setMessage]=useState('')

    async function loadWeatherInfo(){
    try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=569197f73ea08a3d6e78b47f9defd01e `)
     setTemprature((response.data.main.temp -273).toFixed(2))
     setHumidity((response.data.main.humidity))
     setMessage('✅ Data Fetched Successfully.....')
    }
    catch(err){
        setTemprature(0)
        setMessage('City Not found')
    }
    }
    useEffect(()=>{
        loadWeatherInfo()
    },[city])
    return(
        <div>

            <h1 className="app-title">Weather App⛅</h1>
            <h3 className="app-text">Weather For {city}</h3>
            
        <input  
        className="search-box"
        type="text" placeholder="Enter City Name...."
        value={city}
        onChange={(e)=>{
            setCity(e.target.value)

        }}
        />
        <p className="sms-text">{message}</p>
        <h1 className="temp-text">Temperature🌡 : {temperature} °C</h1>
        <h1 className="temp-text"> Humidity 💧 :{humidity}</h1>
        
        
        </div>
        
    )
}
export default Home 