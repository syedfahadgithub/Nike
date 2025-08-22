import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div className='w-full h-screen '>
        <div className='flex gap-[25vw] p-15 py-30 text-zinc-700'>
          <div>
            <h1 className='text-2xl font-semibold'>Let's Get in <span className='text-blue-600 text-3xl font-extrabold'>Touch!</span></h1>
            <p className='mt-5 leading-none'>Have a question or need assistant? <br /> Reach out to us via email,phone or the contact from below. <br />We are eager to assiste you.</p>
            <h3 className='mt-5 text-blue-600 font-semibold'>Nice hearing from you.</h3>
            <p className='flex mt-5 gap-3 items-center'>{<IoLocationSharp className='text-black w-6 h-6 border-[0px] rounded-full text-xl p-1 bg-zinc-300' />} Multan,Pakistan</p>
            <p className='flex mt-2 gap-3 items-center'>{<FaPhoneVolume className='text-black w-6 h-6 border-[0px] rounded-full text-xl p-1 bg-zinc-300' />}+92-3453810550</p>
            <p className='flex mt-2 gap-3 items-center'>{<MdEmail className="text-black w-6 h-6 border-[0px] rounded-full text-xl p-1 bg-zinc-300" />}fahadshahf31@gmail.com</p>
          </div>
          <div>
            <div className='flex flex-col '>
              <h1 className='text-2xl font-semibold text-zinc-900 '>Send a message</h1>
              <input type="text" placeholder='Enter your name' className='border-[1.5px] border-zinc-600 p-2 w-[20vw] mt-5 outline-none text-xl placeholder:text-zinc-800 rounded-lg' />
              <input type="text" placeholder='Enter your email address' className='border-[1.5px] border-zinc-600 p-2 w-[20vw] mt-3 outline-none text-xl placeholder:text-zinc-800 rounded-lg' />
              <textarea type="text" placeholder='Go ahead, We are listing...' className='border-[1.5px] border-zinc-600 p-2 w-[20vw] h-[25vh] mt-3 outline-none placeholder:text-zinc-800 rounded-lg' />
              <button className='p-1 w-[10vw] bg-blue-700 rounded-md text-2xl font-semibold text-white mt-5 cursor-pointer'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact