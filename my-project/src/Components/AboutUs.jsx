import React from "react";
import assests from "../assets/assests";

const AboutUs = () => {
  return (
    <>
    <h1 className="py-6 text-center text-3xl">ABout Us</h1>
      <div className="px-10 py-6 sm:px-14 md:px-16 lg:px-28 flex max-md:flex-wrap gap-2  ">
        
        <div className="md:w-[50%]">
          <img src={assests.AboutPic} alt="" />
        </div>
        <div className="md:w-[50%]">
          <p>
            Dedicated Junior Full-Stack Developer proficient in the MERN stack.
            Proven ability to translate complex requirements into functional,
            user-centric web applications through various personal and academic
            projects. Strong collaborator with a focus on agile methodologies
            and continuous learning. Ready to bring fresh perspectives and a
            strong work ethic to a dynamic development role.
            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
