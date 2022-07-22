import React from "react";
import { APIContext } from "../Context/ApiContext";
import { ModalWrongSearch } from "../component/ModalWrongSearch";
import { BiSearchAlt } from "react-icons/bi";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const { data, setCity, geoData, setCoords, placeValidator } = React.useContext(APIContext);
  const inputRef = React.useRef(null);

  const citySearch = (event) => {
    event.preventDefault();
    setCity(inputRef.current.value);
    console.log("geo", geoData)
    setCoords({
        lat: geoData.coord.lat,
        lon: geoData.coord.lon,
    })
  };

  if (!data) {
    return <p></p>;
  }
  return (
    <div className="search-bar">
      <div className="current-location">
        <h1>{geoData.name},</h1>
        <p>{geoData.sys.country}</p>
      </div>
      <form onSubmit={citySearch} className="input-container">
        <input
          ref={inputRef}
          className="search-input"
          placeholder="Search"
          type="text"
        />
        <button>
          <BiSearchAlt />
        </button>
      {!placeValidator && <ModalWrongSearch/> }
      </form>
    </div>
  );
};

export { SearchBar };
