import React from "react";
import { APIContext } from "../Context/ApiContext";
import "../styles/CurrentWeather.css";

//https://api.openweathermap.org/data/3.0/onecall?lat=4.705036&lon=-74.056782&exclude={part}&appid=7a4e9ebc5971eb8ddbda995d178ffd9a

const CurrentWeather = () => {
  const { data } = React.useContext(APIContext);

  if (!data) {
    return <p></p>;
  }

  return (
    <section className="currentWeather">
      <div className="weather-container">
        <div className="currentWeather--img">
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            alt="Weather"
          />
        </div>
        <div className="currentWeather--actual">
          {data.current.weather.map((type) => (
            <h3 className="currentWeather-main" key={type.id}>
              {type.main}
            </h3>
          ))}
        </div>
        <div className="currentWeather--details">
          <h2 className="currentWeather-location">{data.timezone}</h2>
          <span className="currentWeather-temp">{data.current.temp}°C</span>
        </div>
      </div>
    </section>
  );
};

export { CurrentWeather };
