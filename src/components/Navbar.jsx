import React, { useState } from "react";
import Logo from "../assets/Img/logo2.png";
// import {About} from "./components/About";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className="sticky top-0 z-10">
      <section className="bg-[#faf2f7] text-black flex flex-row justify-between md:px-36 items-center shadow-xl dark:text-white dark:bg-black">
        <div>
          <Link to="/">
            {" "}
            <img src={Logo} alt="" className="w-[10rem] sm:w-[10rem] md:w-[10rem] lg:w-[13rem] justify-center" />
          </Link>
        </div>
        <nav
          className="hidden md:flex text-[15px] sm:text-[12px] sm:mr-24 md:text-[12px] lg:text-[15px] gap-5 font-medium cursor-pointer p-1 relative left-[20rem] max-lg:left-40
                "
          aria-label="main"
        >
          <Link to="/" spy={true} smooth={true} duration={500}>
            Home
          </Link>
          <Link to="/about" spy={true} smooth={true} duration={500}>
            About Us
          </Link>
          <Link to="/services" spy={true} smooth={true} duration={500}>
            Services
          </Link>
          <Link to="/project" spy={true} smooth={true} duration={500}>
            Project
          </Link>
          <Link to="/contact" spy={true} smooth={true} duration={500}>
            Contact Us
          </Link>
          <Link to="/team" spy={true} smooth={true} duration={500}>
            Team
          </Link>
          <Link to="/testimonals" spy={true} smooth={true} duration={500}>
            Testimonals
          </Link>
        </nav>
        <div>
          <div className=" flex md:hidden" onClick={handleChange}>
            <div
              id="humburger-button"
              class="text-3xl cursor-pointer mt-7 mr-5"
            >
              &#9776;
            </div>
          </div>
        </div>
      </section>
      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hiden flex flex-col absolute bg-[#faf2f7] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300  dark:text-white dark:bg-black`}
      >
        <Link to="/" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="/about" spy={true} smooth={true} duration={500}>
          About Us
        </Link>
        <Link to="/services" spy={true} smooth={true} duration={500}>
          Services
        </Link>
        <Link to="/project" spy={true} smooth={true} duration={500}>
          Project
        </Link>
        <Link to="/contact" spy={true} smooth={true} duration={500}>
          Contact Us
        </Link>
        <Link to="/team" spy={true} smooth={true} duration={500}>
          Team
        </Link>
        <Link to="/testimonals" spy={true} smooth={true} duration={500}>
          Testimonals
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
