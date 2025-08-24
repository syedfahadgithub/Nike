import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Login from './pages/Login'
import Register from './pages/Register'
import Protected from './services/Protected'
import Home from './components/Home'
const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Protected />}>
          <Route path='/' element={<Body />} />
          <Route path='/home' element ={<Home/>}/>
          <Route path='/menu' element={<Menu />} />
          <Route path='/location' element={<Location />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      
      </Routes>

      <Footer/>

    </div>
  )
}

export default App