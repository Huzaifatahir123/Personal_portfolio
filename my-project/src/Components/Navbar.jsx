import React from 'react'
import assests from '../assets/assests.js'
import {DownloadIcon} from "lucide-react"
const Navbar = () => {
 const links  = [
     "About Me", "Skills" , "Projects" ,"Contact Us", 
  ]; 
  return (
   <>
     <div className='px-10 py-6 sm:px-14 md:px-16 lg:px-28 flex justify-between
     max-sm:justify-between '>
      <div className='flex gap-2 justify-center items-center'>
         <img className='max-sm:size-4 object-contain' src={assests.Logo} alt="" />
         <h1 className=' sm:text-2xl font-bold text-black'>Personal</h1>
      </div>
      <div className='flex justify-center items-center p-2 md:gap-3  lg:gap-8'>
        {
          links.map((ele ,index)=>(
               <a key={index} className='text-primary text-xl max-md:hidden ' href={`#${ele}`}>{ele}</a>
          ))
        }
      </div>
      <div className=' flex justify-center items-center '>
        <a href={assests.Cv} download="Huzaifa_Tahir_Cv.pdf"
className="relative inline-flex items-center justify-start  maxsm:px-1 px-2  py-3 overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group">
<span
className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span
className="relative w-full text-base font-semibold text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex gap-2 max-sm:text-sm">Resume<DownloadIcon /></span>
</a>
      </div>

      </div> 
   </>
  )
}

export default Navbar