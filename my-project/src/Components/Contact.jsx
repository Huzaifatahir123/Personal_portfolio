import { FacebookIcon } from 'lucide-react'
import React from 'react'

const Contact = () => {
    const inputCss = `border p-2 rounded-sm outline-none`
  return (
    <>
    
    <div className='px-6 py-12 sm:px-14 md:px-16 flex  max-sm:justify-center max-sm:items-center max-sm:flex-col-reverse max-md:justify-center max-md:items-center  gap-10 max-md:flex-wrap'>
        
        <div className='md:w-[40%]'>
            <form action="" className='flex flex-col gap-4'>
                <input placeholder='Name' type="text"  className={`${inputCss}`}/>
                <input className={`${inputCss}`} placeholder='Email' type="text" />
                <input className={`${inputCss}`} placeholder='WebSite' type="text" />
                <textarea className={`${inputCss}`} placeholder='message' name="" id=""></textarea>
                <div className='flex items-start gap-2'>
                   
<button
class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group">
<span
class="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span
class="relative w-full text-base font-semibold text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white ">Get In
Touch</span>
</button>
                </div>
                
            </form>
        </div>
        <div className='flex md:w-[60%] flex-col gap-2'>
            <h1 className='text-3xl text-wrap max-md:text-center'>Lets talk for Something special</h1>
            <p className='text-lg max-md:text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo cum dolor voluptate ex iure ducimus, quos ut quis aspernatur placeat suscipit possimus laboriosam maiores eius aperiam commodi rerum nisi.</p>
            <p className='text-sm font-bold max-md:text-center'>h905923@gmail.com</p>
            <p className='text-sm font-bold max-md:text-center'>+923256797391</p>
        </div>
    </div>
    </>
    
  )
}

export default Contact