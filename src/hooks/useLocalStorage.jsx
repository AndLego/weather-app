import React from "react";
/* eslint-disable */
function useLocalStorage(itemName, initialValue) {
  const [country, setCountry] = React.useState(initialValue);

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    //localStorage solo almacena strings

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      //("nombre con el que se accede", metodo para volverlo string)
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
      //metodo para sacar de string y volver objeto
    }
    setCountry(parsedItem);
  },[]);

  const saveCountry = (newCountry) => {
    const stringfiedItem = JSON.stringify(newCountry);
    localStorage.setItem(itemName, stringfiedItem);
    setCountry(newCountry);
  };

  return { country, saveCountry };
}
/* eslint-enable */
export { useLocalStorage };
