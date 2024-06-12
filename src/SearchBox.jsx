import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URl = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f1837a65c50a2cec836cb2bafc972f3a";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URl}?q=${city}&appid=${API_KEY}&units=metric` // fetch data from API
      );
      let jsonResponse = await response.json();
      
      let result = {
        city: city,
        humidity: jsonResponse.main.humidity,
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handlechange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      // console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      console.log(newInfo);
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={color = "red"}>No such place exists!</p>}
      </form>
    </div>
  );
}
