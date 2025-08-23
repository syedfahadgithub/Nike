import React from 'react'
import { Link, } from 'react-router-dom'

const Register = () => {
    const handleReg = ()=>{
        const user = {
            name:name,
            email:email,
            password:password
        };
        localStorage.setItem("user",JSON.stringify(user))
    };

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-zinc-100'>
            <div className='w-[25vw] h-[65vh] bg-zinc-600 rounded-lg'>
                <h1 className='text-[5vw] text-center text-zinc-200 font-bold'>Register</h1>
                <input type="text" placeholder='Enter your name' className='w-[22vw] p-2 text-2xl text-zinc-200 outline-none border-[1.5px] border-zinc-800 mt-5 ml-5 placeholder:text-zinc-200 rounded-lg' />
                <input type="text" placeholder='Enter your email' className='w-[22vw] p-2 text-2xl text-zinc-200 outline-none border-[1.5px] border-zinc-800 mt-5 ml-5 placeholder:text-zinc-200 rounded-lg' />
                <input type="password" placeholder='Enter Password' className='w-[22vw] p-2 text-2xl text-zinc-200 outline-none border-[1.5px] border-zinc-800 mt-5 ml-5 placeholder:text-zinc-200 rounded-lg' />
                <button className='hover:bg-amber-400 transition duration-300 w-[12vw] bg-zinc-200 text-zinc-600 text-3xl font-bold p-1 mt-10 ml-[6vw] rounded-full' onSubmit={handleReg}>Register</button>
                <Link to="/login" className='text-amber-400 ml-[20vw] font-semibold'>Login</Link>
            </div>
        </div>
    )
}

export default Register