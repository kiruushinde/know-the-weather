import React from 'react'
import Home from './components/Home'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';

const App = () => {
  return (
    // <>
    //   <Navbar />
    // {/* <Footer /> */}
    // {/* </> */}

    <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App