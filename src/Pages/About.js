import React from 'react'
import Navigate from './Navigate'
import { MyProvider } from '../Context/MyContext';
import Counter from '../Context/Counter';
import Count from '../Context/Count';
function About() {
  return (
    <> 
    <Navigate />
     <MyProvider>
      <Count />
     <Counter />
    </MyProvider>
    </>
  )
}

export default About