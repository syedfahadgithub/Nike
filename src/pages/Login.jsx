import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"))
        if (
            input.email === loggedUser.email &&
            input.password === loggedUser.password
        ) {
            localStorage.setItem("loggedIn", "true")
            navigate("/home")
        }
        else {
            alert("Worng email or password")
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("loggedIn")
        navigate('/register')
    }
    return (
        <div className='w-full h-screen flex items-center justify-center bg-zinc-100'>
            <div className='flex flex-col bg-zinc-600 rounded-lg w-[25vw] h-[65vh]'>
                <h1 className='text-[5vw] font-bold text-zinc-200 text-center'>login</h1>
                <input
                    name="email"
                    value={input.email}
                    onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value, })
                    } type="text" placeholder='Enter email' className='outline-none border-[1.5px] border-zinc-700 p-2 w-[22vw] text-2xl text-zinc-200 mt-6 rounded-lg ml-3 placeholder:text-zinc-200' />
                <input
                    name="password"
                    value={input.password}
                    onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value, })
                    } type="password" placeholder='Enter password' className='outline-none border-[1.5px] border-zinc-700 p-2 w-[22vw] text-2xl text-zinc-200 mt-6 rounded-lg ml-3 placeholder:text-zinc-200' />
                <a href="" className='text-lg text-amber-400 ml-[13vw] mt-5'>Forgot password?</a>
                <button className='hover:bg-amber-400 transition duration-300 w-[12vw] text-zinc-600 bg-zinc-200 rounded-full font-bold text-3xl text-center p-1 ml-[6.5vw] mt-8 ' onClick={handleLogin} >Login</button>
                <div className='flex items-center justify-center gap-3  mt-5'>
                    <Link to="/register" className='text-lg text-amber-400 ml-[13vw] '>Register</Link>
                    <button className='text-lg text-amber-400 ' onClick={handleLogout}>logout</button>
                </div>

            </div>
        </div>
    )
}

export default Login