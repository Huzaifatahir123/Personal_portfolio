import React from 'react'
import Navbar from "./Components/Navbar.jsx"
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import Experience from './Components/Experience.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <AboutUs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App