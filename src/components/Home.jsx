import React from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import Location from '../pages/Location'
import Body from './Body'
const Home = () => {
  return (
    <div>
        <Body/>
        <About/>
        <Contact/>
        <Menu/>
        <Location/>
    </div>
  )
}

export default Home