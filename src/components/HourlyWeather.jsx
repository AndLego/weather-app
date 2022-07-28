import React from "react";
import { Hour } from "./Hour";
import { APIContext } from "../Context/ApiContext";
import "../styles/HourlyWeather.css"

const HourlyWeather = () => {
  const { data } = React.useContext(APIContext);

  if (!data) {
    return <p></p>;
  }
  data.hourly.length = 12
  return (
    <ul className="hourly-list">
      {data.hourly.slice(1).map((hour, id) => (
        <Hour key={id} {...hour} />
      ))}
    </ul>
  );
};

export {HourlyWeather};
