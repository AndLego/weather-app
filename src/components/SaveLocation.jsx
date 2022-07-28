import React from "react";
import ReactDOM from "react-dom";
import { SavePlaceContext } from "../Context/SavePlaceContext";
import { APIContext } from "../Context/ApiContext";

import "../styles/SaveLocation.css";
import { FaTrash, FaLocationArrow } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const SaveLocation = ({ close }) => {
  const { setCoords, setCity } = React.useContext(APIContext);
  const { country, deletePlace } = React.useContext(SavePlaceContext);

  const handleClose = () => {
    return close(false);
  };

  const handleDelete = (city) => {
    deletePlace(city);
  };

  const handleGo = (city, lat, lon) => {
    setCity(city);
    setCoords({ lat, lon });
  };

  return ReactDOM.createPortal(
    <div className="saved-background">
      <div className="saved-hero">
        <span className="closeSaved" onClick={handleClose}>
          <AiFillCloseCircle />
        </span>
        <h1>Your Locations</h1>
        {console.log(country)}
        <div className="saved-container">
          {country.map((city, i) => (
            <div className="saved-item" key={i}>
              <h2>{city.location}</h2>
              <FaTrash
                className="delete-location"
                onClick={() => handleDelete(city.location)}
              />
              <FaLocationArrow
                className="go-location"
                onClick={() => handleGo(city.location, city.lat, city.lon)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("saved")
  );
};

export { SaveLocation };
