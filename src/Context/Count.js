import React from 'react'
import { useMyContext } from './MyContext';

function Count() {
const { message } = useMyContext();

 const  handleMessage=()=>{
    alert( message);
 }
  return (
    // <button onClick={handleMessage}>Click me</button>
    <div className='container'>{message}</div>
  )
}

export default Count