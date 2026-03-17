import React from "react";
import assests from "../assets/assests";
import { FacebookIcon , Instagram , Linkedin ,Github, DownloadIcon } from "lucide-react";
const Hero = () => {
    const socialIcons = [
    { Icon: DownloadIcon, link:assests.Cv ,text:"Resume" },
    { Icon: Linkedin, link: "https://linkedin.com/in/huzaifa-tahir-0385292b9" },
    { Icon: Github, link: "https://github.com/Huzaifatahir123/" },
  ];
  return (
    <>
      <div className="px-10 isolation-auto py-6 sm:px-14 md:px-16 lg:px-28 max-lg:justify-center items-center flex   ">
        <div className=" flex  flex-col justify-center py-20 md:w-[40vw]">
         
          <div className="flex flex-wrap gap-2">
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary ">Hello I'am </h1>
            <h1 className="text-4xl max-sm:text-4xl text-text-secondary font-extrabold">Huzaifa Tahir</h1>
          </div>
         
          <div className="flex  gap-2">
            <h1 className="text-4xl max-sm:text-3xl text-text-secondary font-extrabold">FullStack</h1>
<h1 className="text-4xl max-sm:text-3xl font-extrabold ">
  Developer
</h1>
          </div>

          <div className="flex gap-2">
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary">Based In</h1>
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary font-extrabold">Pakistan</h1>
          </div>
        
        

        <div className="sm:mt-10 max-sm:mt-5 text-left text-lg">
            <p> Developer with experience building web applications, working across both frontend and backend.
Focused on problem-solving, writing clean and maintainable code, and developing scalable solutions.
</p>
        </div>
        
   
  <div className="flex   w-[60%] sm:mt-10 max-sm:mt-5 gap-3 items-center">
  
  {socialIcons.map(({Icon,link,text},i)=>(
        <div className="">
             
               <a href={link} target="blank" download="Huzaifa_Tahir_Resume"
class="relative inline-flex items-center justify-start px-3  py-2 overflow-hidden font-medium transition-all bg-indigo-100  rounded hover:bg-white group">
<span
class="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span  
class="relative w-full text-base font-semibold text-left text-black transition-colors duration-700 ease-in-out group-hover:text-white flex gap-2 ">{text} <Icon/></span>
</a>
                
        </div>
         
     ))
   }
   </div>
   
        

        </div>
        
        <div className=" relative max-md:hidden  md:w-[60vw] flex">
                <img src={assests.HeroImg} className="self-start relative right-24 max-sm:right-8 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
