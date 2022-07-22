import React from "react";
import { APIContext } from "../Context/ApiContext";
import { RiWindyFill, RiContrastDrop2Line } from "react-icons/ri";
import { BsThermometerHigh } from "react-icons/bs";

import "../styles/CurrentWeather.css";

//https://api.openweathermap.org/data/3.0/onecall?lat=4.705036&lon=-74.056782&exclude={part}&appid=7a4e9ebc5971eb8ddbda995d178ffd9a

const CurrentWeather = () => {
  const { data } = React.useContext(APIContext);

  const unixConvertHour = (unix) => {
    const dateObject = new Date(unix * 1000);

    const hour = dateObject.toLocaleString("en-US", { hour: "numeric" });
    const minuteA = dateObject.toLocaleString("en-US", { minute: "2-digit" });
    let minute = "";

    minuteA.length < 2 ? (minute = "0" + minuteA) : (minute = minuteA);

    const rta = hour.split(" ");

    return `${rta[0]}:${minute} ${rta[1]}`;
  };

  // const unixTime = data.current.dt * 1000;
  // const dateObject = new Date(unixTime);
  // const weekDayFormat = dateObject.toLocaleString("en-US", {
  //   weekday: "long",
  // });

  const capitalize = (str) => {
    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  };

  if (!data) {
    return <p></p>;
  }

  return (
    <section className="weather-container">
      <div className="weather-current">
        <h5>CURRENT</h5>
        <p>Local Time {unixConvertHour(data.current.dt)}</p>
      </div>
      <div className="forecast-div">
        {/* <p>Forecast for {weekDayFormat}</p> */}
        <p>Forecast for Today</p>
      </div>

      <div className="weather-main-data">
        <span className="weather-temp">{Math.round(data.current.temp)}°</span>

        <ul className="weather-main-details">
          <li className="stat-detail">
            <RiWindyFill />
            <span className="stat-detail">
              Wind Speed {data.current.wind_speed} m/s
            </span>
          </li>

          <li className="stat-detail">
            <RiContrastDrop2Line />
            <span className="stat-detail">
              Humidity {data.current.humidity}%
            </span>
          </li>

          <li className="stat-detail">
            <BsThermometerHigh />
            <span className="stat-detail">
              Feels like {data.current.feels_like}°c
            </span>
          </li>
        </ul>

        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            alt="Weather"
          />
        </div>
      </div>

      <h4 className="weather-description">
        {capitalize(data.current.weather[0].description)}
      </h4>

      <div className="weather-other-details">
        <ul className="weather-other-list">
          <li>
            <p>Visibility</p>
            <span>{data.current.visibility / 1000} km</span>
          </li>
          <li>
            <p>Clouds</p>
            <span>{data.current.clouds} %</span>
          </li>
          <li>
            <p>Dew point</p>
            <span>{data.current.dew_point}°</span>
          </li>
          <li>
            <p>Pressure</p>
            <span>{data.current.pressure} hPa</span>
          </li>
          <li>
            <p>Sunrise</p>
            <span>{unixConvertHour(data.current.sunrise)}</span>
          </li>
          <li>
            <p>Sunset</p>
            <span>{unixConvertHour(data.current.sunset)}</span>
          </li>
          <li>
            <p>UV index</p>
            <span>{data.current.uvi}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { CurrentWeather };
