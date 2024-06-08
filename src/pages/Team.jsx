import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/Img/headerimg.jpg";
import { ScrollRestoration } from "react-router-dom";
import facebook from "../assets/Img/facebook.png";
import X from "../assets/Img/twitter.png";
import LinkedIN from "../assets/Img/linkedin-logo.png";
import intagram from "../assets/Img/instagram.png";
import mercy from "../assets/Img/team1.jpg";
import ajala from "../assets/Img/team2.jpg";
import beauty from "../assets/Img/team3.jpg";
import emmanuel from "../assets/Img/team4.jpg"
import david from "../assets/Img/team5.jpg";

const Team = () => {
  return (
    <div>
      <div>
        <ScrollRestoration />
        <Navbar></Navbar>
        <div className="max-w-[1640px] relative">
          <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center">
            <div className="w-fit ml-20 grid gap-5 text-left">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  text-white">
                Team
              </h1>
              <h1 className="px-4 text-1xl sm:text-2xl md:text-2xl lg:text-2xl  text-white">
                Home <span className="text-[#720455]"> ></span> Team
              </h1>
            </div>
          </div>
          <img src={img} alt="" className="max-h-[400px] w-full " />
        </div>
        <div className="bg-[#faf2f7] dark:bg-black py-10 ">
          <div className="text-center">
            {" "}
            <span
              class=" text-1xl
                  font-bold sm:text-2xl  text-[#720455]"
            >
              Our Team
            </span>
            <h1
              class=" text-3xl
                  font-bold sm:text-5xl text-black dark:text-white"
            >
              The People Who Make It Happen At <br /> Neroks Integrated Services
            </h1>
          </div>
          <div className=" mt-10">
            <ul className="flex flex-wrap gap-20   justify-center mx-10">
              {/* team1 */}
              <li className=" bg-white w-fit rounded-t-2xl shadow-lg">
                      <img
                        src={david}
                        alt=""
                        className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] rounded-t-2xl"
                      />
                <div className="grid m-8 ">
                  <h1 className="text-2xl font-bold">David MADEIN </h1>
                  <p>UI/UX Designer</p>
                  {/* <p>Engineer</p> */}
                  <div className="mt-5 flex gap-5">
                    <a href="">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={X}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={intagram}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/madein-david/">
                      {" "}
                      <img
                        src={LinkedIN}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* team 2 */}
              <li className="bg-white w-fit rounded-t-2xl shadow-lg">
                      <img
                        src={ajala}
                        alt=""
                        className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] rounded-t-2xl"
                      />
                <div className="grid m-8 ">
                  <h1 className="text-2xl font-bold">Oladimeji AJALA </h1>
                  <p>Brand Identity Designer</p>
                  {/* <p>Engineer</p> */}
                  <div className="mt-5 flex gap-5">
                    <a href="">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={X}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={intagram}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/oladimeji-ajala-44288321a/">
                      {" "}
                      <img
                        src={LinkedIN}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* team3 */}
              <li className="bg-white w-fit rounded-t-2xl shadow-lg">
                        <img
                          src={beauty}
                          alt=""
                          className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] rounded-t-2xl"
                        />
                <div className="grid m-8 ">
                  <h1 className="text-2xl font-bold">Beauty ADEGOKE </h1>
                  <p>UI/UX Designer</p>
                  {/* <p>Engineer</p> */}
                  <div className="mt-5 flex gap-5">
                    <a href="">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={X}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={intagram}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/beauty-adegoke-2b1443230/">
                      {" "}
                      <img
                        src={LinkedIN}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* team4 */}
              <li className="bg-white w-fit rounded-t-2xl shadow-lg">
                <img
                  src={mercy}
                  alt=""
                  className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] rounded-t-2xl"
                />
                <div className="grid m-8 ">
                  <h1 className="text-2xl font-bold">Oghenero ONOJAKE</h1>
                  <p>Project Manager</p>
                  <div className="mt-5 flex gap-5">
                    <a href="">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="">
                      {" "}
                      <img
                        src={X}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.instagram.com/the_con_que_ror/">
                      {" "}
                      <img
                        src={intagram}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/mercy-onojake/">
                      {" "}
                      <img
                        src={LinkedIN}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* team 5 */}
              <li className="bg-white w-fit rounded-t-2xl shadow-lg">
                      <img
                        src={emmanuel}
                        alt=""
                        className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] rounded-t-2xl"
                      />
                <div className="grid m-8 gap-5 ">
                  <h1 className="text-2xl font-bold">Miracle IBEMERE-EZE</h1>
                  <p>Web Developer</p>
                  <div className="flex gap-5 t-20 ">
                    <a href="https://www.facebook.com/profile.php?id=100089742184909">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://x.com/king_miracle__?t=vP_qPm_aXShYZ3FulOtHMw&s=09">
                      {" "}
                      <img
                        src={X}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.instagram.com/miracle_mic_?igsh=MXZmYjk4bHoxNG55bw==">
                      {" "}
                      <img
                        src={intagram}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/emmanuel-miracle-8375a2248">
                      {" "}
                      <img
                        src={LinkedIN}
                        alt=""
                        className="w-[3rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
                      />
                    </a>
                  </div>
                  {/* <p>Engineer</p> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Team;
