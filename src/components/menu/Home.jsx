import React from "react";
import cv from "../../assets/VIT VANNAK CV Apply for FrontEnd Developer.pdf";
import { LuDownload } from "react-icons/lu";
import Socail from "./Socail";
import Picture from "./Picture";
import State from "./State";
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = { cv }; // Path to your file
    link.download = "VIT-VANNAK-CV.pdf"; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="max-lg:mx-auto min-xl:mx-auto mx-[11%] max-sm:mx-[2%] h-full lg:mt-[40px] max-2xl:mx-[8%] ">
      <div className="flex flex-row max-lg:flex-col  items-center justify-between max-lg:pt-8 max-lg:pb-10">
        <div className="text-center xl:text-left order-2 lg:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6">
            Hello I'm <br />
            <span className="text-accent-DEAULT">VIT VANNAK</span>
          </h1>
          <p className="mb-9 max-w-[500px] text-white/80 text-[18px]">
           Web Developer is my passionate.For creating about my web application I used Code Languages such as Tailwind, Javascript, RactJS, NodeJS and MySql.Explore my portfolio page to see the projects I have already built.
          </p>
          <div className="flex flex-col xl:flex-row gap-8 items-center">
            <a
              target="_blank"
              href="VIT VANNAK CV Apply for FrontEnd Developer.pdf"
              download="VIT VANNAK CV Apply for FrontEnd Developer.pdf">
              <button
                className="text-[18px] border-accent-DEAULT  active:scale-[0.98] hover:scale-[1.05]  duration-500 cursor-pointer py-[8px] px-[18px] border-[1px] 
rounded-[12px] flex mx-auto items-center justify-center gap-[8px]"
                onClick={handleDownload}>
                Download CV <LuDownload />
              </button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Socail />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-none mb-8 lg:mb-0 2xl:mr-[80px]">
          <Picture/>
        </div>
      </div>
      <div className="mt-[70px] max-sm:mb-[60px] max-xl:mb-[60px] max-xl:mt-[10px] max-sm:mt-[10px] max-2xl:mb-[40px]">
        <State/>
      </div>
    </section>
  );
};

export default Home;
