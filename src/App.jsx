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
const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/location' element={<Location />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <About />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App