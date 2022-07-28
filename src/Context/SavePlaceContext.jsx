import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const SavePlaceContext = React.createContext();

const SavePlaceContextProvider = (props) => {
  const { country, saveCountry } = useLocalStorage("MY_PLACES", []);

  const addPlace = (location, lat, lon) => {
    const locationList = [...country];
    locationList.push({
      location: location,
      lat: lat,
      lon: lon
    });
    saveCountry(locationList);
  };

  const deletePlace = (location) => {
    const locationIndex = country.findIndex((place) => place === location);
    const locationList = [...country];
    locationList.splice(locationIndex, 1);
    saveCountry(locationList);
  };

  return (
    <SavePlaceContext.Provider
      value={{
        addPlace,
        deletePlace,
        country,
      }}
    >
      {props.children}
    </SavePlaceContext.Provider>
  );
};

export { SavePlaceContext, SavePlaceContextProvider };
