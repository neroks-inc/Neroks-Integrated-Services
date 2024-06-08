import React from "react";
import Logo from "../assets/Img/logo2.png";
import icon from "../assets/Img/right-arrow.png";
import call from "../assets/Img/call.png";
import facebook from "../assets/Img/facebook.png";
import X from "../assets/Img/twitter.png";
import LinkedIN from "../assets/Img/linkedin-logo.png";
import map from "../assets/Img/location-pin.png";
import mail from "../assets/Img/mail.png";
import intagram from "../assets/Img/instagram.png";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="bg-[#faf2f7] bg-cover p-6 scroll-mt-20 my-auto justify-center dark:bg-black">
      <div className=" bg-white grid justify-around gap-20 p-10 mx-10 rounded-xl sm:flex max-md:gap-10  dark:bg-[#faf2f7] dark:text-black w-fit">
        <div>
          <img src={Logo} alt="" className="w-[10rem]" />
          <p className="mt-5">
          Transforming your digital journey with smart innovative solutions <br /> superior support and a seamless experience
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://web.facebook.com/profile.php?id=61558190872395">
              {" "}
              <img
                src={facebook}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
              />
            </a>
            <a href="https://x.com/Neroks_Inc?t=0gd7gM66i2gw1ObDnrw4VA&s=08">
              {" "}
              <img
                src={X}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
              />
            </a>
            <a
              href="https://www.instagram.com/neroks_inc?igsh=MWFhdTQwc3Fwb2x0ag==
"
            >
              {" "}
              <img
                src={intagram}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/neroks-inc/
"
            >
              {" "}
              <img
                src={LinkedIN}
                alt=""
                className="w-[2rem] border solid-black p-2 rounded-xl hover:bg-[#720455] dark:bg-[#faf2f7]"
              />
            </a>
          </div>
        </div>
        <div className=" grid">
          <h1 className="text-1xl font-bold mb-3">Services</h1>
            <p className="">Web and App Development</p>
            <p className="">Product & Project Management</p>
            <p className="">Data Analysis</p>
            <p className="">Corporate Branding</p>
            <p className="">IT Consultancy</p>
            <p className="">UI/UX</p>
        </div>
        <div className="grid">
          <h1 className="text-1xl font-bold mb-3">Contact</h1>
          <div className="flex gap-3">
            <img
              src={call}
              alt=""
              className="w-[3rem] h-[3rem] border solid-black p-2 rounded-xl bg-[#fcf1f9]"
            />
            <div>
              <h1 className="font-bold">Phone Number</h1>
              <p>09019279404</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              src={map}
              alt=""
              className="w-[3rem] h-[3rem] border solid-black p-2 rounded-xl bg-[#fcf1f9]"
            />
            <div>
              <h1 className="font-bold">Location</h1>
              <p>Lagos, Nigeria </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              src={mail}
              alt=""
              className="w-[3rem] h-[3rem] border solid-black p-2 rounded-xl bg-[#fcf1f9]"
            />
            <div>
              <h1 className="font-bold">Email</h1>
              <p>neroks.inc@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-1xl font-bold mb-3 ">
            Chat With Our Customer Care Representative
          </h1>
          <div className=" grid mt-7 sm:w-11/12 justify-items-center">
            <a href="https://wa.me/2349019279404">
              <div className="flex border border-black rounded-full hover:shadow-md bg-[#720455] hover:bg-[#b94f9d]">
                <div className=" my-3 mx-3 text-white w-[10rem] ">
                  <h3> Achieve Your Dream With Us</h3>
                </div>
                <img src={icon} alt="" class="w-5 my-3 mr-3" />
              </div>
            </a>
          {/* <Togglebutton></Togglebutton> */}
          </div>
        </div>
      </div>
      <div className="m-3 grid justify-between sm:mx-40 sm:flex dark:text-white">
        <div>
          <p>© Neroks Integrated Services | All Right Reserved</p>
        </div>
        <div className="grid justify-between gap-10 sm:flex dark:text-white">
          <a href="">Terms and Condition</a>
          <a href="#">Privacy Policy</a>
          <Link to="/contact" spy={true} smooth={true} duration={500} >Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;