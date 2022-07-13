import React from "react";

const APIContext = React.createContext({});

const ApiContextProvider = ({ children }) => {
  const [data, setData] = React.useState(null);
  // const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}onecall?lat=4.705036&lon=-74.056782&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((weather) => {
        setData(weather);
        //   setLoading(false);
      });
  }, []);

  return (
  <APIContext.Provider 
    value={{
        data,
        }}
    >
        {children}
    </APIContext.Provider>
    )
};

export { ApiContextProvider, APIContext };
