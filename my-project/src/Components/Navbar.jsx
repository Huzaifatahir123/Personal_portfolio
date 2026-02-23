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
         <img className='max-sm:size-8 object-contain' src={assests.Logo} alt="" />
         <h1 className='text-2xl font-bold text-black'>Personal</h1>
      </div>
      <div className='flex justify-center items-center p-2 md:gap-3  lg:gap-8'>
        {
          links.map((ele)=>(
               <a className='text-primary text-xl max-md:hidden ' href={`#${ele}`}>{ele}</a>
          ))
        }
      </div>
      <div className=' flex justify-center items-center '>
        <button className='bg-primary text-text max-sm:p-2 max-sm:text-sm p-3 flex gap-2 rounded-sm cursor-pointer text-xl justify-center items-center '>Resume <DownloadIcon size={20}/></button>
      </div>
      </div> 
   </>
  )
}

export default Navbar