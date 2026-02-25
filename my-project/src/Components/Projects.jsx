import React from 'react'
import assests from '../assets/assests'
import {LinkIcon} from "lucide-react"
const Projects = () => {
    const projects = [{
        img:assests.ProjectImg,
        title:"Crypto Screener Application",
        description:"I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
        Link:"http:123456789"

    },{
        img:assests.ProjectImg,
        title:"Crypto Screener Application",
        description:"I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
        Link:"http:123456789"

    },{
        img:assests.ProjectImg,
        title:"Crypto Screener Application",
        description:"I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
        Link:"http:123456789"

    }]
  return (
    <>
    <div className='bg-primary text-text px-10 py-6 sm:px-14 md:px-16  flex flex-col '>
        <h1 className='text-center text-5xl '>Projects</h1>
        <div className='flex flex-wrap py-12  max-md:justify-center items-center'>
            {projects.map((Ele,i)=>(
               <div className={`flex  flex-wrap max-md:flex-col ${i % 2 ? `flex-row-reverse`:"flex-row"}`}>
                <div className='md:w-[50%]'>
                     <img src={Ele.img} alt="" />
                </div>
                <div className='flex flex-col justify-center items-start gap-2 md:w-[50%]'>
                         <h1 className='text-5xl'>0{i+1}</h1>
                         <h1 className='text-3xl'>Crypto Screener Application</h1>
                         <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                         <a href={Ele.Link}><LinkIcon/></a>
                </div>
               </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Projects