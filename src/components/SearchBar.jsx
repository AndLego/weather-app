import React from "react";
import { APIContext } from "../Context/ApiContext";
import { SavePlaceContext } from "../Context/SavePlaceContext";
import { ModalWrongSearch } from "../components/ModalWrongSearch";

import { BsSave } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const { data, setCity, geoData, setCoords, placeValidator } =
    React.useContext(APIContext);
  const { addPlace } = React.useContext(SavePlaceContext);
  const [message, setMessage] = React.useState("");

  const inputRef = React.useRef(null);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const citySearch = (event) => {
    event.preventDefault();
    setCity(inputRef.current.value);
    setCoords({
      lat: geoData.coord.lat,
      lon: geoData.coord.lon,
    });
    setMessage("");
  };

  const handleSaveCity = () => {
    addPlace(geoData.name, geoData.coord.lat, geoData.coord.lon);
  };

  if (!data) {
    return <p></p>;
  }
  return (
    <div className="search-bar">
      <div className="current-location">
        <h1>{geoData.name},</h1>
        <p>{geoData.sys.country}</p>
        <span onClick={handleSaveCity}>
          <BsSave />
        </span>
      </div>
      <form onSubmit={citySearch} className="input-container">
        <input
          ref={inputRef}
          value={message}
          className="search-input"
          placeholder="Search"
          type="text"
          onChange={handleChange}
        />
        <button>
          <BiSearchAlt />
        </button>
        {!placeValidator && <ModalWrongSearch />}
      </form>
    </div>
  );
};

export { SearchBar };
