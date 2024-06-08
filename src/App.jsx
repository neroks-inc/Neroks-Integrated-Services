import React from 'react';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
// const express = require ('express')
// const path = require ('path')

const App  = () => {
  return (
    <div className='dark'>
      <Navbar/>
      <Home/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
export default App;
// app.use(express.static(path.join(_dirname, 'public')));