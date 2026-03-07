import { FacebookIcon } from 'lucide-react'
import React from 'react'

const Contact = () => {
    const inputCss = `border p-2 rounded-sm outline-none`
  return (
    <>
    <h1 className='text-5xl text-center py-6'>Contact Us</h1>
    <div className='px-6 py-6 sm:px-14 md:px-16 flex  max-sm:justify-center max-sm:items-center max-sm:flex-col-reverse max-md:justify-center max-md:items-center  gap-10 max-md:flex-wrap'>
        
        <div className='md:w-[40%]'>
            <form action="" className='flex flex-col gap-4'>
                <input placeholder='Name' type="text"  className={`${inputCss}`}/>
                <input className={`${inputCss}`} placeholder='Email' type="text" />
                <input className={`${inputCss}`} placeholder='WebSite' type="text" />
                <textarea className={`${inputCss}`} placeholder='message' name="" id=""></textarea>
                <div className='flex items-start gap-2'>
                   <button className='p-2 text-nowrap bg-primary text-text'>Get In Touch</button>
                   <div className='flex gap-2'>
                    <a className='border p-2 flex justify-center items-center ' href=""><FacebookIcon/></a>
                    <a className='border p-2 flex justify-center items-center' href=""><FacebookIcon/></a>
                    <a className='border p-2 flex justify-center items-center ' href=""><FacebookIcon/></a>
                    <a className='border p-2 flex justify-center items-center' href=""><FacebookIcon/></a>
                   </div>
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