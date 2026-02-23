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
        
   
  <div className="flex justify-between w-[60%] sm:mt-10 max-sm:mt-5 gap-3 items-center">
  
  {socialIcons.map(({Icon,link})=>(
        <div className="border-2 border-text-secondary p-2 rounded-sm">
             
                <Icon href={link}/>
                
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
