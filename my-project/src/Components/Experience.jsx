import React from "react";
import {GlobeOffIcon} from "lucide-react"
const Experience = () => {
  const Experience = [
    { icon:GlobeOffIcon, title: "Google", duration:"Sep 24 - Present " , description:"As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide." },
    { icon:GlobeOffIcon, title: "Google", duration:"Sep 24 - Present " , description:"As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide." },
    { icon:GlobeOffIcon, title: "Google", duration:"Sep 24 - Present " , description:"As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide." },
];
  return (
    <>
      <div className="bg-primary text-text px-10 py-6 sm:px-14 md:px-16 lg:px-28 flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl">My Experience</h1>
        <div className="flex flex-wrap gap-6 ">
           {
            Experience.map((Ele)=>(
                  <div className="border rounded-sm flex flex-col gap-4 max-sm:py-2 max-sm:px-4  py-4 px-6 ">
                         <div className="flex justify-between items-center">
                               <h1 className="flex gap-2 text-2xl"><Ele.icon/> Google</h1>
                               <h3>{Ele.duration}</h3>
                         </div>
                         <p>
                            {Ele.description}
                         </p>
                  </div>
            ))
           }
        </div>
      </div>
    </>
  );
};

export default Experience;
