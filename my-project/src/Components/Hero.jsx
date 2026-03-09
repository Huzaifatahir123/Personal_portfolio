import React from "react";
import assests from "../assets/assests";
import { FacebookIcon , Instagram , Linkedin ,Github, } from "lucide-react";
const Hero = () => {
    const socialIcons = [
    { Icon: FacebookIcon, link: "#" },
    { Icon: Instagram, link: "#" },
    { Icon: Linkedin, link: "#" },
    { Icon: Github, link: "#" },
  ];
  return (
    <>
      <div className="px-10 py-6 sm:px-14 md:px-16 lg:px-28 max-lg:justify-center items-center flex max-lg:flex-col-reverse  ">
        <div className=" flex  flex-col justify-center py-20 md:w-[40vw]">
         
          <div className="flex flex-wrap gap-2">
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary ">Hello I'am </h1>
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary font-extrabold">Huzaifa Tahir</h1>
          </div>
         
          <div className="flex  gap-2">
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary font-extrabold">Frontend</h1>
<h1 className="text-4xl max-sm:text-2xl font-extrabold ">
  Developer
</h1>
          </div>

          <div className="flex gap-2">
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary">Based In</h1>
            <h1 className="text-4xl max-sm:text-2xl text-text-secondary font-extrabold">India</h1>
          </div>
        
        

        <div className="sm:mt-10 max-sm:mt-5 text-left text-lg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae pariatur esse aspernatur id voluptas assumenda, porro est maiores labore a praesentium impedit provident veniam, quibusdam quia, modi animi et.</p>
        </div>
        
   
  <div className="flex  w-[60%] sm:mt-10 max-sm:mt-5 gap-3 items-center">
  
  {socialIcons.map(({Icon,link})=>(
        <div className="">
             
               <button
class="relative inline-flex items-center justify-start px-3  py-2 overflow-hidden font-medium transition-all border-2  rounded hover:bg-white group">
<span
class="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span
class="relative w-full text-base font-semibold text-left text-black transition-colors duration-1000 ease-in-out group-hover:text-white flex gap-2 "><Icon href={link}/></span>
</button>
                
        </div>
         
     ))
   }
   </div>
        

        </div>
        
        <div className=" relative  md:w-[60vw] flex">
                <img src={assests.HeroImg} className="self-start relative right-24 max-sm:right-8 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
