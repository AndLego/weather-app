import React from "react";

const APIContext = React.createContext({});

const ApiContextProvider = ({ children }) => {
  const [city, setCity] = React.useState("New York");
  const [coords, setCoords] = React.useState({
    lon: -74.006,
    lat: 40.7143,
  });
  const [geoData, setGeoData] = React.useState();
  const [data, setData] = React.useState(null);
  const [placeValidator, setPlaceValidator] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const geoData = await res.json();

        if (res.status !== 200) {
          console.log("la jodiste");
          setPlaceValidator(false);
        } else {
          setGeoData(geoData);
          setCoords(geoData.coord);
          setPlaceValidator(true);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [city]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.REACT_APP_API}onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, [coords]);

  return (
    <APIContext.Provider
      value={{
        data,
        setCity,
        geoData,
        setCoords,
        placeValidator,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export { ApiContextProvider, APIContext };
