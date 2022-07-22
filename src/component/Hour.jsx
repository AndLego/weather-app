import React from "react";
import {
  BsThermometerHigh,
  BsDroplet,
  BsWind,
  BsFillSunFill,
} from "react-icons/bs";

const Hour = (props) => {
  const unixConvertHour = (unix) => {
    const dateObject = new Date(unix * 1000);
    return dateObject.toLocaleString("en-US", { hour: "numeric" });
  };
  const unixConvertDay = (unix) => {
    const unixTime = props.dt * 1000;
    const dateObject = new Date(unixTime);
    const weekDayFormat = dateObject.toLocaleString("en-US", {
      weekday: "long",
    });

    const dayFormat = dateObject.toLocaleString("en-US", {
      day: "numeric",
    });

    return `${weekDayFormat} ${dayFormat}`
  };

  return (
    <li className="daily-item">
      <div className="item-day">
        <p>{unixConvertHour(props.dt)}</p>
        <p>{unixConvertDay(props.dt)}</p>
      </div>
      <div className="item-details-container">
        <img
          src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          alt=""
          className="daily-icon"
        />
        <div className="item-details">
          <span>
            <BsThermometerHigh /> {props.temp}°c
          </span>
          <span>
            <BsWind /> {props.wind_speed} m/s
          </span>
          <span>
            <BsFillSunFill /> {props.uvi} UV
          </span>
          <span>
            <BsDroplet /> {props.humidity} %
          </span>
        </div>
      </div>
      <p className="item-description">{props.weather[0].description}</p>
    </li>
  );
};

export { Hour };
