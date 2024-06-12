import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./SearchBox.css"
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wanderland",
    temp: 30,
    maxTemp: 44,
    minTemp: 42,
    humidity: 4,
    weather: "Cloudy",
    feelsLike: 20,
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div className="weather">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}  />
      <InfoBox  info ={weatherInfo}/>
    </div>
  );
}
