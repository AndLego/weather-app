import React from "react";
import { APIContext } from "../Context/ApiContext";
import { RiWindyFill, RiContrastDrop2Line } from "react-icons/ri";
import { GiWaves, GiUbisoftSun } from "react-icons/gi";
import "../styles/WeatherStats.css";

const WeatherStats = () => {
  const { data } = React.useContext(APIContext);

  if (!data) {
    return <p></p>;
  }
  
  return (
    <ul className="weather-stats">
      <li>
        <RiWindyFill />
        <div className="weather-stats-details">
          <h5 className="stats-title">Wind Speed</h5>
          <span className="stat-detail">{data.current.wind_speed} km/h</span>
        </div>
      </li>
      <li>
        <RiContrastDrop2Line />
        <div className="weather-stats-details">
          <h5 className="stats-title">Humidity</h5>
          <span className="stat-detail">{data.current.humidity}%</span>
        </div>
      </li>
      <li>
        <GiWaves />
        <div className="weather-stats-details">
          <h5 className="stats-title">Pressure</h5>
          <span className="stat-detail">{data.current.pressure}</span>
        </div>
      </li>
      <li>
        <GiUbisoftSun />
        <div className="weather-stats-details">
          <h5 className="stats-title">UV index</h5>
          <span className="stat-detail">{data.current.uvi}</span>
        </div>
      </li>
    </ul>
  );
};

export { WeatherStats };
