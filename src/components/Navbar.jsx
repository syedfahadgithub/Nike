import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='px-8 py-6 flex items-center justify-between bg-zinc-50' >
        <Link to="/"><img src="src/assets/nike.png" alt="logo" className='w-[8vw] h-[8vh]' /></Link>
        <div className='flex gap-10 font-semibold'>
          <Link to="/menu">MENU</Link>
          <Link to="/location">LOCATION</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <button className='p-1 w-[9vw] border-none text-2xl bg-red-600 text-white font-semibold cursor-pointer' onClick={() => {
          navigate('/login')
        }}>Login</button>
      </div>
    </div>
  )
}

export default Navbar
