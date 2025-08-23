import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className='w-full h-screen bg-zinc-100'>
        <div className='flex'>
          <div className='p-7 '>
            <h4 className='text-xl text-zinc-600 font-light'>About Company</h4>
            <h1 className='text-[5vw] font-extrabold uppercase leading-[4vw] mt-3'>Your <br /> Journey  Starts Here!</h1>
            <p className='text-sm mt-10 leading-none text-zinc-600'>Nike exists to bring inspiration and innovation to every athlete in the world. And if you have a body — you're an athlete.
              Founded in 1964 and headquartered in Beaverton, Oregon, Nike has grown into the world’s leading sportswear brand by keeping athletes at the center of everything we do. From cutting-edge footwear to performance-driven apparel, our products are designed to help you move faster, train harder, and dream bigger.
              We believe in the power of sport to move the world forward. Through bold design, sustainable innovation, and a commitment to equality, Nike empowers people everywhere to push their limits and redefine what’s possible.</p>
            <button className='flex items-center gap-0.5 w-[10vw] mt-5 bg-amber-400 text-white font-semibold text-xl p-1'>Learn More {<FaArrowRight className='text-sm mt-1' />}</button>
          </div>
          <div>
            <img src="src/assets/aboutpage.jpg" alt="aboutpage-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About