import React, { useState, useEffect } from 'react'
import Navbar from "./Components/Navbar.jsx"
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import Experience from './Components/Experience.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import Loader from './Components/Loader.jsx'
import Testimonial from './Components/Testimonial.jsx'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      // Small delay so the loader feels intentional and smooth
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    // Check if the page is already loaded (common during development)
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  return (
    <div className='overflow-x-hidden'>
      {isLoading ? (
        /* 1. Loader triggers while isLoading is true */
        <div className="fixed inset-0 z-12 flex items-center justify-center ">
          <Loader />
        </div>
      ) : (
        /* 2. Main Website appears once loading is false */
        <>
          <Navbar />
          <Hero />
          <Skills />
          <Experience />
          <AboutUs />
          <Projects />
          <Testimonial/>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App;