import React from 'react'
import img1 from "../assets/Img/hero.png";
import feature1 from "../assets/Img/feature1.gif";
import feature2 from "../assets/Img/feature2.gif";
import feature3 from "../assets/Img/feature3.gif";

const Feature = () => {
  return (
    <section className="bg-[#faf2f7] dark:bg-black bg-cover p-6 my-auto pt-30  justify-center">
<div className='flex flex-col-reverse justify-center sm:flex-row items-center scroll-mt-20 mx-20 mt-10'>
<img src={img1} alt="" class="w-2/2 sm:w-1/2" />
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
          <p class=" text-1xl   text-slate-700 dark:text-slate-400 my-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nemo beatae obcaecati accusantium asperiores dolor veritatis!
            Impedit quod velit iusto consequuntur, reprehenderit pariatur
            perspiciatis id voluptatum dolorum aperiam architecto commodi!
          </p>
          <ul class="list-none mx-auto my-12 flex flex-wrap sm:flex-row gap-7  justify-center">
            <li
              class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-black py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
            >
              <h3 class="text-4xl  dark:text-white font-bold ">0</h3>
              <p class="sm:text-1xl text-1xl mt-2 text-black dark:text-slate-400">
                Team Members
              </p>
            </li>
            <li
              class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-black py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
            >
              <h3 class="text-4xl  dark:text-white font-bold ">0</h3>
              <p class="sm:text-1xl text-1xl mt-2 text-black dark:text-slate-400">
                Satified Clients
              </p>
            </li>{" "}
            <li
              class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-black py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
            >
              <h3 class="text-4xl  dark:text-white font-bold ">0</h3>
              <p class="sm:text-1xl text-1xl mt-2 text-black dark:text-slate-400">
                Complete Project
              </p>
            </li>{" "}
            <li
              class="w-[15rem] sm:w-72 flex flex-col items-left text-left text-[#720455] shadow-md dark:border-gray-100 bg-white
             dark:bg-black py-10 px-10 rounded-2xl hover:bg-[#720455] hover:border
              border-black hover:text-white transition delay-150 duration-300 ease-in-out"
            >
              <h3 class="text-4xl  dark:text-white font-bold ">0</h3>
              <p class="sm:text-1xl text-1xl mt-2 text-black dark:text-slate-400">
                Winning Award
              </p>
            </li>
          </ul>
        </article>
      
</div>
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
            Mobile Software Solutions <br /> For Every Need
          </h1>
        </div>
        <ul class="flex flex-col-reverse justify-center sm:flex-row gap-10 items-center scroll-mt-20 mx-20 mt-10">
          <li
            class="w-[20rem] sm:w-[30rem] flex  flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:border
              border-black transition delay-150 duration-300 ease-in-out"
          >
            <img src={feature1} alt="" class="mb-6" />
            <h3 class="text-3xl  dark:text-black font-bold ">Voice Recorder</h3>
            <p class="sm:text-1xl text-1xl mt-2  dark:text-slate-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              alias necessitatibus molestias
            </p>
          </li>
          <li
            class="w-[20rem] sm:w-[30rem] flex  flex-col items-left text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:border
              border-black transition delay-150 duration-300 ease-in-out"
          >
            <img src={feature2} alt="" class="mb-6" />
            <h3 class="text-3xl  dark:text-black font-bold ">Voice Recorder</h3>
            <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              alias necessitatibus molestias
            </p>
          </li>
          <li
            class="w-[20rem] sm:w-[30rem]  flex  flex-col text-left shadow-md dark:border-gray-100 bg-white
             dark:bg-[#faf2f7] py-10 px-10 rounded-2xl hover:border
              border-black transition delay-150 duration-300 ease-in-out"
          >
            <img src={feature3} alt="" class="mb-6" />
            <h3 class="text-3xl  dark:text-black font-bold ">Voice Recorder</h3>
            <p class="sm:text-1xl text-1xl mt-2  dark:text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              alias necessitatibus molestias
            </p>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Feature

// <li
//             class="w-[20rem] flex flex-col text-left shadow-md dark:border-gray-100 bg-white
//              dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
//           >
//             <img src={substainability} alt="Adventure" class="mb-6 w-20 " />
//             <h3 class="text-3xl font-bold ">Substainability</h3>
//           </li>
//           <li
//             class="w-[20rem] flex flex-col text-left shadow-md dark:border-gray-100 bg-white
//              dark:bg-[#faf2f7] py-10 px-10 rounded-2xl"
//           >
//             <img src={innovation} alt="Adventure" class="mb-6 w-20 " />
//             <h3 class="text-3xl font-bold ">Innovation</h3>
//           </li>