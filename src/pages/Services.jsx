import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/Img/headerimg.jpg";
import { ScrollRestoration } from "react-router-dom";
import  ui from '../assets/Img/website.png';
import web from '../assets/Img/monitor.png';
import product from '../assets/Img/centralized.png';
import data from '../assets/Img/dashboard.png';
import branding from '../assets/Img/brand.png';
import IT from '../assets/Img/application.png';  

const Services = () => {
  return (
    <div>
      <div>
        <ScrollRestoration />
        <Navbar></Navbar>
        <div className="max-w-[1640px] relative">
          <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
            <div className="w-fit ml-20 grid gap-5 text-left">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white">
                Services
              </h1>
              <h1 className="px-4 text-1xl sm:text-2xl md:text-2xl lg:text-2xl  text-white">
                Home <span className="text-[#720455]"> ></span> service
              </h1>
            </div>
          </div>
          <img src={img} alt="" className="max-h-[400px] w-full " />
        </div>
        {/* ---------------------------------------------- */}
        <div className="bg-[#faf2f7] bg-cover dark:bg-black">
          <div className="mx- p-20 justify-center items-center">
            <ul className="flex justify-center flex-wrap gap-10">
              <li className=" bg-white h-[25rem] w-[20rem] grid justify-between p-10 rounded-xl shadow-md dark:bg-[#faf2f7] dark:text-black">
              <img src={web} alt="" srcset="" className="w-[5rem] bg-[#faf2f7] p-3 rounded-xl border border-black" />
              <h1 className="text-2xl font-semibold">Web and App Development</h1>
              <p>Building innovative digital experiences through web and app development.</p>
              </li>
             
              <li className=" bg-white h-[25rem] w-[20rem] grid justify-between p-10 rounded-xl shadow-md  dark:bg-[#faf2f7]   dark:text-black">
              <img src={product} alt="" srcset="" className="w-[5rem] bg-[#faf2f7] p-3 rounded-xl border border-black" />
              <h1 className="text-2xl font-semibold">Product & Project Management</h1>
              <p>Delivering high-impact products and projects through collaborative planning, execution, and continuous improvement.</p>
              </li>
              <li className=" bg-white h-[25rem] w-[20rem] grid justify-between p-10 rounded-xl shadow-md dark:bg-[#faf2f7] dark:text-black">
              <img src={data} alt="" srcset="" className="w-[5rem] bg-[#faf2f7] p-3 rounded-xl border border-black" />
              <h1 className="text-2xl font-semibold">Data Analysis</h1>
              <p>Transforming complex data into actionable intelligence, leveraging statistical expertise and cutting-edge tools.</p>
              </li>
              <li className=" bg-white h-[25rem] w-[20rem] grid justify-between p-10 rounded-xl shadow-md dark:bg-[#faf2f7] dark:text-black">
              <img src={branding} alt="" srcset="" className="w-[5rem] bg-[#faf2f7] p-3 rounded-xl border border-black" />
              <h1 className="text-2xl font-semibold">Corporate Branding</h1>
              <p>Defining and expressing corporate brands through distinctive logos, typography, and visual systems.</p>
              </li>
              <li className=" bg-white h-[25rem] w-[20rem] grid justify-between p-10 rounded-xl shadow-md dark:bg-[#faf2f7] dark:text-black">
              <img src={IT} alt="" srcset="" className="w-[5rem] bg-[#faf2f7] p-3 rounded-xl border border-black" />
              <h1 className="text-2xl font-semibold">IT Consultancy</h1>
              <p>Transforming organizations through expert IT guidance, solution implementation, and support.</p>
              </li>
              <li className=" bg-white h-[25rem] w-[20rem] grid justify-between p-10 rounded-xl shadow-md dark:bg-[#faf2f7] dark:text-black">
              <img src={ui} alt="" srcset="" className="w-[5rem] bg-[#faf2f7] p-3 rounded-xl border border-black" />
              <h1 className="text-2xl font-semibold">UI/UX</h1>
              <p>Transforming user experiences through empathetic design, usability expertise, and pixel-perfect execution.</p>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Services;
