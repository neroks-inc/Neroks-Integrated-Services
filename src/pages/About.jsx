import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/Img/headerimg.jpg";
import { ScrollRestoration } from "react-router-dom";
import about from "../assets/Img/about_us.png";

const About = () => {
  return (
    <div className="scroll-mt-20">
      <ScrollRestoration />
      <Navbar></Navbar>

      <div className="max-w-[1640px] relative">
        <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
          <div className="w-fit ml-20 grid gap-5 text-left">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white">
              About Us
            </h1>
            <h1 className="px-4 text-1xl sm:text-2xl md:text-2xl lg:text-2xl  text-white">
              Home <span className="text-[#720455]"> ></span> About Us
            </h1>
          </div>
        </div>
        <img src={img} alt="" className="max-h-[400px] w-full " />
      </div>
      <div className="dark:bg-black xmb-10">
        <div className="bg-[#faf2f7] dark:bg-black">
          <section class="flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 mx-10 ">
            <article class=" mx-20 text-center sm:text-left gap-7">
              <h1
                class=" text-3xl
                 font-bold sm:text-[30px]  text-slate-900 dark:text-white my-10 text-center"
              >
                Empower Your Business With IT Most The{" "}
                <span className="text-[#720455] underline">Solution</span>{" "}
              </h1>
              <div class="flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 mx-10 dark:text-white gap-10">
                <p className="w-[20rem] sm:w-1/2">
                  Neroks Integrated Services is a fast growing tech solution
                  based company with a team of innovators, thinkers, and
                  problem-solvers passionate about harnessing the power of
                  technology to drive positive change. At NIS, we're dedicated
                  to crafting cutting-edge solutions that transform the way
                  businesses operate and people live. Founded in 2022, our
                  company was born out of a desire to bridge the gap between
                  technology and human potential. With a vision to make a
                  meaningful impact, we've grown into a dynamic team of experts
                  in software development, data analytics, cybersecurity, and
                  more. In conclusion, we are passionate about helping
                  businesses succeed in the digital age. We offer a wide range
                  of services, including web and app development, data analysis,
                  and custom solutions. We have a strong focus on healthcare,
                  finance, education, and manufacturing industries, and we are
                  committed to providing the highest quality service and support
                  to our clients
                </p>    
                <img src={about} alt="" class="sm:w-1/2 w-2/3"/>
              </div>
            </article>
          </section>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default About;
