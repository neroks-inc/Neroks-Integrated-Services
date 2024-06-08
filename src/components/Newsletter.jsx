// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import newsletter from "../assets/Img/newsletter.png";
import Success from "./Success";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqybqzq");
  if (state.succeeded) {
    return <Success></Success>;
  }
  return (
    <section className="bg-[#faf2f7] bg-cover p-6 scroll-mt-20 my-auto justify-center pt-32 dark:bg-black">
      <div className=" bg-white grid sm:flex p-8 mx-20 max-sm:mx-0 rounded-xl w-fit md:grid lg:flex gap-10 dark:bg-[#faf2f7] ">
        <div className="">
          <center>
            {" "}
            <img
              src={newsletter}
              alt=""
              className="w-[8rem] sm:w-[20rem] md:w-[20rem] lg:w-[40rem]"
            />
          </center>
        </div> 
        <div className=" flex flex-col justify-evenly gap-5 text-center">
          <h1 className=" text-4xl max-sm:text-2xl font-bold">
            Subscribe To Our Newsletter
          </h1>{" "}
          <p className=" text-1xl">
            Stay Ahead With Neroks Integrated Services - Your Monthly Dose of Digital Insight, Updates, and Expert Advise
          </p>
          <form onSubmit={handleSubmit}>
            {" "}
            <center>
              <div className="grid gap-5 max-md:grid max-sm:justify-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-3 border bg-[#faf2f7] border-black w-[15rem]  rounded-lg"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="p-3 border border-black w-[10rem] rounded-lg bg-[#720455] text-white max-sm:w-[10rem]"
                >
                  SUBSCRIBE
                </button>{" "}
              </div>
            </center>
          </form>
        </div>
      </div>
    </section>
  );
}

function App() {
  return <ContactForm />;
}

export default App;