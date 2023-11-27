import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Search from './Components/Search';
import Container from './Components/Container';

function App() {
  const [place, setPlace] = useState('');
  const [windSpeed,setWindSpeed] = useState('');
  const [placeName,setplaceName] = useState("");
  const [temp,setTemp] = useState('');
  const [tempFeelsLike, setTempFeelsLike] = useState("");
  const [localName,setLocalName] = useState("");
  const [clouds,setClouds] = useState("");
  const [country,setCountry] = useState("");

  const iso3166 = require('iso-3166-1-alpha-2');

  const findLat_long = async () => {
    const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=be98838ad781ad54a79646e6dfcc1fc3`;
    try {
      const response = await fetch(url1);
      const responseJson = await response.json();
      console.log(responseJson);

      if (responseJson && responseJson.length > 0) {
        const longitude = responseJson[0].lon;
        const latitude = responseJson[0].lat;
        console.log(responseJson[0].local_names.hi);
        const local_name = responseJson[0].local_names.hi;
        setLocalName(local_name);
        setplaceName(responseJson[0].name);
        console.log(responseJson[0].lat);
        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=be98838ad781ad54a79646e6dfcc1fc3`;
        findTemp(url2);
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching latitude and longitude:", error);
    }
  };

  const findTemp = async (url) => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      
      const windSpeed = responseJson.wind.speed;
      const clouds_percent = responseJson.clouds.all;
      console.log(iso3166.getCountry(responseJson.sys.country));
      setClouds(clouds_percent);
      setWindSpeed(windSpeed);
      const main_temp_kelvin = responseJson.main.temp;
      const temp_feels_like = responseJson.main.feels_like;
      const main_temp_celcius_feels_like = Math.round(temp_feels_like-273.15);
      const main_temp_celcius = Math.round(main_temp_kelvin-273.15);
      setTempFeelsLike(main_temp_celcius_feels_like);
      setTemp(main_temp_celcius);
     


    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  };

  useEffect(() => {
    findLat_long();
  }, [place]);

  return (
    
    <>
      
      <div className="container"> <Search place={place} setPlace={setPlace}/>
      {place === "" ? <h1 className=' my-5'>Enter valid input</h1>:<Container clouds = {clouds} place={place} placeName = {placeName} localName={localName} windSpeed={windSpeed} temp = {temp} tempFeelsLike = {tempFeelsLike} />}</div>
      
      
     
    </>
  );
}

export default App;