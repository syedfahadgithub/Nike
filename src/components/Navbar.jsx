import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='px-8 py-6 flex items-center justify-between' >
        <Link to="/"><img src="src/assets/nike.png" alt="logo" className='w-[8vw] h-[8vh]' /></Link>
        <div className='flex gap-10 font-semibold'>
          <Link to="/menu">MENU</Link>
          <Link to="/location">LOCATION</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <button className='p-1 w-[9vw] border-none text-2xl bg-red-600 text-white font-semibold cursor-pointer'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
