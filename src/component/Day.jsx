import React from "react";
import "../styles/Day.css"

const Day = (props) => {
  const unixTime = props.dt * 1000;
  const dateObject = new Date(unixTime);
  const humanDateFormat = dateObject.toLocaleString("en-US", {
    weekday: "long",
  });

  return (
    <li className="daily-item">
      <p>{humanDateFormat}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
        alt=""
        className="daily-icon"
      />
      <h3>{props.weather[0].main}</h3>
      <p>{Math.round(props.temp.day)}°</p>
    </li>
  );
};

export { Day };
