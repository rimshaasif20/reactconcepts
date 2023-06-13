import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Home from './Pages/Home';
// import Contact from './Pages/Contact';
// import About from './Pages/About';
// import Services from './Pages/Services';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Services = lazy(() => import('./Pages/Services'));
function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div>Please wait Page is Loading...</div>}>
      <Routes>
         <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
      </Routes>
      </Suspense>
    </BrowserRouter> 
  );
}

export default App;
