import React from 'react'
import contact from '../assets/Img/success.gif'


const Success = () => {
  return (
    <div className="bg-[#faf2f7] bg-cover p-6 scroll-mt-20 justify-center dark:bg-black">
       <center>
       <div className=''>
            <center> <img src={contact} alt="" className="w-[10rem] sm:w-[10rem] md:w-[20rem] lg:w-[30rem] rounded-3xl~"/>
            <p className='text-center text-black dark:text-white pb-5 text-2xl font-semibold'>Thank you for Getting in Touch</p></center>
        </div>
       </center>
    </div>
  )
}

export default Success