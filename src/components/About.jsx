import React, { useEffect } from "react";
import profile from "../assets/portfolio-image.jpg";


import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  /**
   * Handles the download button click event and downloads the resume file.
   */
  
  return (
    <div
      name="about"
      className="w-full h-screen bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA] text-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={profile}
              alt=""
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-white">
              I am JOHN NDUNG'U NJAU
            </p>
            {/* Description */}
            <p className="text-sm leading-7 text-white ">
              Born in Central Kenya, I was instilled with values of unity, resilience, and diligence. I am an advocate for education, viewing it as a tool for personal growth and societal contribution. My interests include reading, travel and playing guitar. I perceive challenges as growth opportunities and look forward to making a positive societal impact. Proficient in multiple programming languages and interested in technology’s societal impact.
            </p>
            {/* Download resume button */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;