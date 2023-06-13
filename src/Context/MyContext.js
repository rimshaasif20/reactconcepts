import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const message="Hello! nice to meet";

  return (
    <MyContext.Provider value={{ count, increment, decrement, message }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
