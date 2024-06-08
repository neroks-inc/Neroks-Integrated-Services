
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import pagenotfound from "../assets/Img/project.png";

const Project = () => {
  return (
    <div className="dark:bg-black">
      <ScrollRestoration />
      <Navbar></Navbar>
      <center>
        <div className=" mx-20 p-4 relative ">
          <img src={pagenotfound} alt="" className=" w-[30rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem]" />
          <div className="">
            {/* <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-20 text-gray-00">Oops This page is under <br />construction 😥</h1> */}
            <div className="px-4 text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
              <h1 className="text-6xl text-[#720455] font-bold">We Are Cooking</h1>
              <p className="text-2xl text-black dark:text-white">Coming Soon!</p>
            </div>
             {/* <Newsletter></Newsletter> */}
          </div>
        </div>
      </center>
      <Footer></Footer>
    </div>
  );
};

export default Project;