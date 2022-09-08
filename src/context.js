import React, { useState } from "react";

const GlobalStateContext = React.createContext({});
export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart = ({ name, price }) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  return (
    <GlobalStateContext.Provider value={{ items, addToCart }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;
