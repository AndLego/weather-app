import React from "react";
import { CurrentWeather } from "../component/CurrentWeather";
import { WeeklyWeather } from "../component/WeeklyWeather";
import { HourlyWeather } from "../component/HourlyWeather";
import "../styles/DataContainer.css";

const DataContainer = () => {
  const [select, setSelect] = React.useState(false);

  const choosedOption = () => {
    setSelect(!select);

  };

  return (
    <div className="data-container">
      <CurrentWeather />
      <div className="data-select">
        <div className="data-options">
          <h5 className={!select ? 'selected' : "notSelected"} onClick={() => choosedOption()}>WEEK</h5>
          <h5 className={select ? 'selected' : "notSelected"} onClick={() => choosedOption()}>HOURLY</h5>
        </div>
        {!select && <WeeklyWeather />}
        {select && <HourlyWeather />}
      </div>
    </div>
  );
};

export { DataContainer };
