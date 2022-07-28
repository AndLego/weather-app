import React from "react";
import {
  BsThermometerHigh,
  BsDroplet,
  BsWind,
  BsFillSunFill,
} from "react-icons/bs";
import "../styles/Day.css";

const Day = (props) => {
  const unixTime = props.dt * 1000;
  const dateObject = new Date(unixTime);
  const weekDayFormat = dateObject.toLocaleString("en-US", {
    weekday: "long",
  });
  const monthFormat = dateObject.toLocaleString("en-US", {
    month: "long",
  });
  const dayFormat = dateObject.toLocaleString("en-US", {
    day: "numeric",
  });

  return (
    <li className="daily-item">
      <div className="item-day">
        <p>{weekDayFormat}</p>
        <p>
          {monthFormat} {dayFormat}
        </p>
      </div>
      <div className="item-details-container">
        <img
          src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          alt=""
          className="daily-icon"
        />
        <div className="item-details">
          <span>
            <BsThermometerHigh /> {Math.floor((props.temp.min + props.temp.max) / 2)}°c
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

export { Day };
