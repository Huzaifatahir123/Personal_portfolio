import React from "react";
import assests from "../assets/assests";
import {Download} from "lucide-react"

const Skills = () => {
  const Skills = [
    { icon: assests.git, skill: "Git" },
    { icon: assests.javaScript, skill: "JavaScript" },
    {icon: assests.mongodb ,skill:"MongoDb" },
    {icon:assests.react,skill:"React.JS"},
    {icon:assests.node,skill:"Node.Js"},
    {icon:assests.framer,skill:"Framer-Motion"},
    {icon:assests.tailwind,skill:"Tailwind Css"},
    {icon:assests.postgre,skill:"PostgreSql"},
    {icon:assests.express,skill:"Express"},
    {icon:assests.redux,skill:"Redux"},
    
  ];
  return (
    <>
      <div className="px-10 py-6 sm:px-14 md:px-16 flex flex-col  lg:px-28">
       <center> <h1>My Skills</h1> </center> 
        <div className="flex max-sm:justify-center max-sm:items-start flex-wrap sm:gap-6 max-sm:gap-5 sm:items-center   py-10 ">
            {
                Skills.map(({icon,skill})=>(
                    <div className="flex flex-col w-32 rounded-xs gap-2 sm:w-44 border-2 border-text-secondary p-2">
                         <img src={icon} alt="" />
                         <h1 className="text-sm">{skill}</h1>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Skills;
