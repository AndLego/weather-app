import React from "react";
import { Day } from "./Day";
import { APIContext } from "../Context/ApiContext";
import "../styles/ListDays.css"

const ListDays = () => {
  const { data } = React.useContext(APIContext);
  console.log(data);

  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <ul className="weekly-list">
      {data.daily.map((day, id) => (
        <Day key={id} {...day} />
      ))}
    </ul>
  );
};

export { ListDays };
