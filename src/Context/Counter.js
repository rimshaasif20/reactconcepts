import React from 'react';
import { useMyContext } from './MyContext';
const Counter = () => {
  const { count, increment, decrement } = useMyContext();
  return (
    <div className='container'>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default Counter;
