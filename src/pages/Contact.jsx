import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img from '../assets/Img/headerimg.jpg'
import { ScrollRestoration } from "react-router-dom";
import Map from '../components/Map';
import ContactUsform from '../components/ContactUsform'

const Contact = () => {
  return (
    <div>
       <div>
       <ScrollRestoration />
      <Navbar></Navbar>
      <div className="max-w-[1640px] relative">
        <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
       <div className="w-fit ml-20 grid gap-5 text-left">
       <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white"> Contact</h1>
        <h1 className="px-4 text-1xl sm:text-2xl md:text-2xl lg:text-2xl  text-white">Home <span  className="text-[#720455]"> > </span> Contact</h1>
       </div>
        </div>
        <img src={img} alt="" className="max-h-[400px] w-full " />
      </div>
    
      <Map></Map>
      <ContactUsform></ContactUsform>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default Contact