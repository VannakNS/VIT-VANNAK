import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Don't forget to import Swiper's CSS
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import vnstore1 from "../../assets/vnstore.png";
import vnstore2 from "../../assets/vnstore2.png";
import { SiLabview } from "react-icons/si";

const project = [
  {
    num: "01",
    category: "frontend",
    titale: "project 01",
    des: "This is my frontend project about Ecomerse website (No Responsive).I make this frondend project by:",
    stack: [
      {
        name: "HTML 5,",
      },
      {
        name: "CSS 3",
      },
    ],
    image: vnstore1,
    live: "",
    github: "",
  },
];

const Portfolio = () => {
  const [projs, senprojs] = useState(0);
  const changsilw = () => {
    // Add any functionality you want to execute on slide change
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] w-full h-[50%] ">
              <div className="text-6xl leading-none font-extrabold text-white ">
                {project[0].num}
              </div>
              <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent-DEAULT transition-all duration-500 capitalize break-words">
                {project[0].category} project
              </h2>
              <p className="text-white/60 break-words overflow-wrap break-word text-[18px]">
                {project[0].des}
              </p>
              <ul className="flex flex-wrap gap-x-4">
                {project[0].stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent-DEAULT">
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/29 w-[60%]"></div>
              <div className="flex gap-4 items-start">
                <a
                  href={project[0].live}
                  className="flex flex-col items-center group"
                >
                  <div className="flex h-[70px] w-[70px] rounded-full bg-white/5 items-center justify-center transition-all duration-500">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-DEAULT" />
                  </div>
                  <p className="mt-2 text-white text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    Live Project
                  </p>
                </a>
                <a
                  href={project[0].github}
                  className="flex flex-col items-center group"
                >
                  <div className="flex h-[70px] w-[70px] rounded-full bg-white/5 items-center justify-center transition-all duration-500">
                    <BsGithub className="text-white text-3xl group-hover:text-accent-DEAULT" />
                  </div>
                  <p className="mt-2 text-white text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    GitHub
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={changsilw}
            >
              {project.map((item, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="relative w-full h-full flex justify-center items-center bg-pink-50/20">
                    <img
                      src={item.image}
                      alt={`Project ${item.num}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
