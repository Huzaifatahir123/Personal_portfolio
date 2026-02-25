import React from "react";
import assests from "../assets/assests";
import {Download} from "lucide-react"

const Skills = () => {
  const Skills = [
    { icon: assests.git, skill: "Git" },
    { icon: assests.javaScript, skill: "JavaScript" },
    {icon: Download ,skill:"MongoDb" },
    {icon:Download,skill:"React.JS"},
    {icon:Download,skill:"Node.Js"},
    {icon:Download,skill:"Node.Js"},
    {icon:Download,skill:"Node.Js"},
    {icon:Download,skill:"Node.Js"},
    {icon:Download,skill:"Node.Js"},
    { icon: assests.git, skill: "Git" },
  ];
  return (
    <>
      <div className="px-10 py-6 sm:px-14 md:px-16 flex flex-col  lg:px-28">
       <center> <h1>My Skills</h1> </center> 
        <div className="flex max-sm:justify-center max-sm:items-center flex-wrap gap-10 items-start   py-10 ">
            {
                Skills.map(({icon,skill})=>(
                    <div className="flex flex-col w-32  sm:w-44 border-2 border-text-secondary p-2">
                         <img src={icon} alt="" />
                         <h1>{skill}</h1>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Skills;
