import React, { useState } from "react";
import review1 from "../assets/Img/review1.jfif";
import left from "../assets/Img/left.png";
import right from "../assets/Img/right.png";
import quote from "../assets/Img/quotes.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/Img/headerimg.jpg'
import { ScrollRestoration } from "react-router-dom";


const Testimonals = () => {
    const Testimonial_data = [
        {
          img: review1,
          content_text:"First of all, I want to appreciate you for all your efforts for the completion of the Logo. It has indeed been a wonderful experience with you. 🍾🍷 I love every part of the project, from the point of ideation down to the point of making visible those ideas. I also love the colours scheme, fonts and in fact everything. This really speaks about our brand. Your customer relationship skill is one of a kind and your services are TOP-NOTCH 👌.I want to really thank you for this.",
          testimonial_name: "Albert GOODLUCK",
          text_block: "CEO, Omniffy Technologies Ltd.",
          project: "Brand Identity"
        },
      ];
    
      const [current, setCurrent] = useState(0);
    
      const length = Testimonial_data.length;
    
      const previous = () =>{
        setCurrent(current === 0 ? length - 1: current  - 1);
      }
    
      const next = () =>{
        setCurrent(current === length - 1 ? 0 : current  + 1);
      }
      return (
        <div>
          <ScrollRestoration />
            <Navbar></Navbar>
            <div className="max-w-[1640px] relative">
        <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
       <div className="w-fit ml-20 grid gap-5 text-left">
       <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white">Testimonals</h1>
        <h1 className="px-4 text-1xl sm:text-2xl md:text-2xl lg:text-2xl  text-white">Home <span  className="text-[#720455]"> ></span> Clients Review</h1>
       </div>
        </div>
        <img src={img} alt="" className="max-h-[400px] w-full " />
      </div>
            <section
        className="bg-[#faf2f7] bg-cover dark:bg-black">
        <div className="flex p-6 pt-32 my-auto justify-center max-md:grid md:mx-20">
        <div className="text-center w-full ">
            {" "}
            <span
              class=" text-1xl
                      font-bold sm:text-2xl  text-[#720455] dark:text-white"
            >
             Client Testimonals
            </span>
            <h1
              class=" text-3xl
                      font-bold sm:text-5xl text-black dark:text-white my-5"
            >
             Hear What Our Customers <br />Have To Say
            </h1>
          </div>
          <div className="justify-center bg-[#f1d7ea] rounded-xl p-10 dark:text-black dark:bg-[#faf2f7]">
            {Testimonial_data.map(
              (item, index) =>
                index === current && (
                  <div key={index}>
                    <div className="pb-5 flex items-start gap-5 text-1xl">
                      <img src={quote} alt="" className="w-[2rem]" />
                      <h2 className="text-black">
                        {item.content_text}
                      </h2>
                    </div>
                    <div className="flex gap-4 items-center text-[13px]  font-semibold">
                        <img
                          src={item.img}
                          alt=""
                          className="w-[10rem] rounded-full"
                        />
                      <div>
                        <h6>{item.testimonial_name}</h6>
                        <span>{item.text_block}</span>
                        <p>{"Project: "+item.project}</p>
                      </div>
                    </div>
                    <div className="flex gap-20 sm:gap-52 justify-center items-end">
                      <img src={left} alt="" className="w-[2rem] sm:w-[3rem] bg-[#720455] rounded-xl  p-3" onClick={previous} />
                      <img src={right} alt="" className="w-[2rem] sm:w-[3rem] bg-[#720455] rounded-xl p-3" onClick={next} />
                    </div>
                  </div>
                )
            )}
          </div>
    
        </div>
             </section>
            <Footer></Footer>
        </div>
      );
    };
  
  export default Testimonals