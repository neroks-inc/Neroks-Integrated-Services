import React from "react";
import icon from "../assets/Img/right-arrow.png";
import { ScrollRestoration } from "react-router-dom";
import icon5 from "../assets/Img/right-arrow.png";
import img1 from "../assets/Img/hero.png";
import feature1 from "../assets/Img/feature1.gif";
import feature2 from "../assets/Img/feature2.gif";
import feature3 from "../assets/Img/feature3.gif";
import vision from "../assets/Img/opportunity.png";
import mission from "../assets/Img/leadership.png";
import intergrity from "../assets/Img/quality.png";
import excellence from "../assets/Img/system.png";
import customer from "../assets/Img/customer-satisfaction.png";
import customer2 from "../assets/Img/centralized.png";
import problem from "../assets/Img/problem-solving.png";
import agility from "../assets/Img/agile.png";
import expertise from "../assets/Img/application.png";
import value from "../assets/Img/quality.png"
import innovation from "../assets/Img/innovation.png"
import sustainability from "../assets/Img/substain.png"

const Home = () => {
  return (
    <div className="dark:bg-black xmb-10">
      <section
        id="Home"
        class="flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 mx-10 "
      >
        <ScrollRestoration />
        <article class="sm:w-1/2 mx-10 text-center sm:text-left">
          <h1
            class=" text-3xl
                 font-bold sm:text-7xl  text-slate-900 dark:text-white my-10"
          >
            Transform Your{" "}
            <span className="text-[#720455] underline">Business</span> with
            Cutting-Edge Technology
          </h1>
          <p class=" text-2xl text-black dark:text-white font-semibold">
            Develop, Innovate, and Thrive with Our Expert Tech Solutions
          </p>
          <div className=" grid gap-5 mt-7 sm:w-11/12 sm:flex justify-items-center">
            <a href="https://wa.me/2349019279404">
              <div className="flex border border-black rounded-full hover:shadow-md bg-[#720455] hover:bg-[#b94f9d]">
                <div className=" my-3 mx-3 text-white">
                  <h3> ACHIEVE YOUR DREAM WITH US</h3>
                </div>
                <img src={icon} alt="" class="w-7 my-3 mr-3" />
              </div>
            </a>
          </div>
        </article>
        <img src={img1} alt="" class="sm:w-2/5 w-2/3" />
      </section>
      {/* statements */}
      <section className="bg-[#faf2f7] bg-cover p-6 scroll-mt-20 my-auto pt-10 justify-center dark:bg-black">
        <div className="text-center my-1">
          {" "}
          <span
            class=" text-1xl
            font-bold sm:text-2xl  text-[#720455]"
          >
            Statements
          </span>
          <h1
            class=" text-3xl
            font-bold sm:text-5xl text-black dark:text-white my-5"
          >
            Vision / Mission
          </h1>
        </div>
        <div>
          <ul class="list-none mx-20 flex flex-col-reverse sm:flex-row my-12 gap-10 justify-around">
            <li
              class="items-left text-center text-black justify-center
            gap-8 w-[15rem]
             "
            >
              <center>
                {" "}
                <img
                  src={mission}
                  alt=""
                  srcset=""
                  className=" w-[7rem] sm:w-[5rem] md:w-[5rem] lg:w-[10rem]"
                />
              </center>
              <h3 class="text-2xl sm:text-1xl dark:text-white font-bold">
                MISSION
              </h3>
              <p class="sm:text-1xl text-1xl dark:text-white text-center">
               Pushing boundaries through innovation, disrupting
               industries with breakthrough technologies 
               that redefine possibility.
              </p>
            </li>
            <li
              class="items-left text-center text-black  justify-center
           gap-8 w-[15rem]
             "
            >
              <center>
                {" "}
                <img
                  src={vision}
                  alt=""
                  srcset=""
                  className="w-[7rem] sm:w-[5rem] md:w-[5rem] lg:w-[10rem]"
                />
              </center>
              <h3 class="text-2xl dark:text-white font-bold ">VISION</h3>
              <p class="sm:text-1xl text-1xl dark:text-white text-center">
                To Be The no. 1. Leading African Company Creating Sustainable
                Technical and Technological Solution
              </p>
            </li>
            <li
              class="items-left text-center text-black  justify-center
           gap-8 w-[15rem]
             "
            >
              <center>
                {" "}
                <img
                  src={value}
                  alt=""
                  srcset=""
                  className="w-[7rem] sm:w-[5rem] md:w-[5rem] lg:w-[10rem]"
                />
              </center>
              <h3 class="text-2xl dark:text-white font-bold ">VALUE</h3>
              <p class="sm:text-1xl text-1xl dark:text-white text-center">
              NIS delivers innovative, reliable, and
                user-friendly tech solutions that empower your digital
                potential.
              </p>
            </li>
          </ul>{" "}
        </div>
        {/* VALUE INFO */}
        <center>
        <h1
            class=" text-3xl
                  font-bold sm:text-5xl text-black dark:text-white my-5"
          >
            At NIS, Our Values Include...
          </h1>
        </center>
        <ul class="list-none mx-20 my-12 flex flex-wrap sm:flex-row gap-10 justify-center">
          <li
            class="w-[25rem] flex flex-col text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
          >
            <img src={intergrity} alt="Adventure" class="mb-6 w-20 " />
            <h3 class="text-3xl font-bold ">Intergrity</h3>
          </li>
          <li
            class="w-[25rem]  flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
          >
            <img src={excellence} alt="Adventure" class="mb-6 w-20 " />
            <h3 class="text-3xl  font-bold ">Excellence</h3>
          </li>
          <li
            class="w-[25rem] flex flex-col text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
          >
            <img src={sustainability} alt="Adventure" class="mb-6 w-20 " />
            <h3 class="text-3xl font-bold ">Sustainability</h3>
          </li>
          <li
            class="w-[25rem]  flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
          >
            <img src={innovation} alt="Adventure" class="mb-6 w-20 " />
            <h3 class="text-3xl  font-bold ">Innovation</h3>
          </li>
          <li
            class="w-[25rem] flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
          >
            <img src={problem} alt="Adventure" class="mb-6 w-20" />
            <h3 class="text-3xl font-bold ">Problem Solving</h3>
          </li>
          <li
            class="w-[25rem] flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl "
          >
            <img src={customer} alt="Adventure" class="mb-6 w-20" />
            <h3 class="text-3xl font-bold ">Customer Centricity</h3>
            
          </li>
        </ul>
        {/* VALUE INFO END */}
      </section>
      <section className="bg-[#faf2f7] bg-cover p-6 scroll-mt-20 my-auto justify-center dark:bg-[black]">
        <div className="text-center my-1">
          {" "}
          <span
            class=" text-1xl
                  font-bold sm:text-2xl  text-[#720455]"
          >
            Why Choose Us
          </span>
          <h1
            class=" text-3xl
                  font-bold sm:text-5xl text-black dark:text-white my-5"
          >
            Unleash Your Digital <br /> Transformative Journey
          </h1>
        </div>
        <ul class="list-none mx-auto my-12 flex flex-wrap sm:flex-row gap-10 justify-center">
          <li
            class="w-[30rem] sm:w-1/4 flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
          >
            <img src={customer2} alt="Adventure" class="mb-6 w-20 " />
            <h3 class="text-3xl font-bold ">Customer-centric</h3>
            <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
              Your success is our top priority; we're dedicated to delivering
              exceptional service and support.
            </p>
            <a
              href="#"
              className="flex mt-7 font-bold gap-3 sm:text-1xl text-[10px]"
            >
              {" "}
              VIEW DETAILS{" "}
              <img
                src={icon5}
                alt=""
                srcset=""
                className="w-5 justify-center"
              />{" "}
            </a>
          </li>
          <li
            class="w-[30rem] sm:w-1/4 flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
          >
            <img src={expertise} alt="Adventure" class="mb-6 w-20 " />
            <h3 class="text-3xl  font-bold ">Expertise</h3>
            <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
              Our team of seasoned professionals has a proven track record in
              delivering successful tech projects.
            </p>
            <a
              href="#"
              className="flex mt-7 font-bold gap-3 sm:text-1xl text-[10px]"
            >
              {" "}
              VIEW DETAILS{" "}
              <img
                src={icon5}
                alt=""
                srcset=""
                className="w-5 justify-center"
              />{" "}
            </a>
          </li>
          <li
            class="w-[30rem] sm:w-1/4 flex flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
          >
            <img src={agility} alt="Adventure" class="mb-6 w-20" />
            <h3 class="text-3xl font-bold ">Agility</h3>
            <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
              We adapt quickly to changing project requirements and timelines.
            </p>
            <a
              href="#"
              className="flex mt-7 font-bold gap-3 sm:text-1xl text-[10px]"
            >
              {" "}
              VIEW DETAILS{" "}
              <img
                src={icon5}
                alt=""
                srcset=""
                className="w-5 justify-center"
              />{" "}
            </a>
          </li>
        </ul>
      </section>
      <section className="bg-[#faf2f7] dark:bg-black bg-cover p-6 my-auto pt-30  justify-center">
        {/* <div className="flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 mx-20 mt-10">
          <img src={feature} alt="" class="w-2/2 sm:w-1/2" />
          <article class="sm:w-1/2 mx-10 text-center sm:text-left">
            <span
              class=" text-1xl
              font-bold sm:text-2xl  text-[#720455]"
            >
              Our Feature
            </span>
            <h1
              class=" text-3xl
               font-bold sm:text-6xl  text-slate-900 dark:text-white my-10"
            >
              Stay Connected With Edge Mobile
            </h1>
            <p class=" text-1xl  text-black dark:text-white my-11">
              Fueling innovation, driving digital transformation, and unlocking
              new revenue streams with our cutting-edge API architecture,
              microservices approach, DevOps practices, agile development
              methodologies, and cloud-native applications, enabling rapid
              development, integration, deployment, and iteration.
            </p>
            <ul class="list-none mx-auto my-12 flex flex-wrap sm:flex-row gap-7  justify-center">
              <li
                class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
              >
                <h3 class="text-4xl  font-bold ">5</h3>
                <p class="sm:text-1xl text-1xl mt-2 text-black">Team Members</p>
              </li>
              <li
                class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
              >
                <h3 class="text-4xl  font-bold ">1</h3>
                <p class="sm:text-1xl text-1xl mt-2 text-black ">
                  Satisfied Clients
                </p>
              </li>{" "}
              <li
                class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
              >
                <h3 class="text-4xl  font-bold ">1</h3>
                <p class="sm:text-1xl text-1xl mt-2 text-black ">
                  Complete Project
                </p>
              </li>{" "}
            </ul>
          </article>
        </div> */}
        <section class="p-6 scroll-mt-20 mt-10">
          <div className="text-center my-1">
            {" "}
            <span
              class=" text-1xl
                  font-bold sm:text-2xl  text-[#720455]"
            >
              Our Features
            </span>
            <h1
              class=" text-3xl
                  font-bold sm:text-5xl text-black dark:text-white my-5"
            >
              Software Solutions <br /> For Every Need
            </h1>
          </div>
          <ul class="flex flex-col-reverse justify-center sm:flex-row gap-10 items-center scroll-mt-20 mx-20 mt-10">
            <li
              class="w-[20rem] sm:w-[30rem] flex  flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:border
              border-black transition delay-150 duration-300 ease-in-out"
            >
              <img src={feature1} alt="" class="mb-6" />
              <h3 class="text-3xl  dark:text-black font-bold ">
                Collaboration
              </h3>
              <p class="sm:text-1xl text-1xl mt-2  dark:text-slate-400">
                Partnering With Clients and Team, Open communication and Trust
              </p>
            </li>
            <li
              class="w-[20rem] sm:w-[30rem] flex  flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:border
              border-black transition delay-150 duration-300 ease-in-out"
            >
              <img src={feature2} alt="" class="mb-6" />
              <h3 class="text-3xl  dark:text-black font-bold ">Creativity</h3>
              <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
                Out-of-the-box Thinking and Problem-sloving, Innovative
                Approches
              </p>
            </li>
            <li
              class="w-[20rem] sm:w-[30rem]  flex  flex-col text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:border
              border-black transition delay-150 duration-300 ease-in-out"
            >
              <img src={feature3} alt="" class="mb-6" />
              <h3 class="text-3xl  dark:text-black font-bold ">Innovation</h3>
              <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
                Developing Cutting-Edge Solution that Drive Business Forward
              </p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Home;