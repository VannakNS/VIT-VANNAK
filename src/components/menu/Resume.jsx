import { motion } from "framer-motion";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { SiAntdesign, SiTailwindcss, SiVite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";

const about = [
  {
    tital: "About me",
    descrip:
      "about me",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Vit Vannak",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+855) 78 550 172",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Cambodain",
      },
      {
        fieldName: "Place Of Birth",
        fieldValue: "Kampong Chham",
      },
      {
        fieldName: "Current Address",
        fieldValue: "Phnom Penh",
      },
      {
        fieldName: "Email",
        fieldValue: "Vannak2705@gmail.com",
      },
      {
        fieldName: "Languages",
        fieldValue: "Khmer, English",
      },
    ],
  },
];

const experains = [
  {
    tital: "My experience",
    descrip: "I have no exprience",
  },
];
const education = [
  {
    tital: "My Education",
    descrip:
      "My Education",
    primarySch: [
      {
        instituation: "Norton university",
        degree: "Software Development",
        duration: "2023 - Present",
      },
      {
        instituation: "Samaki Meanchey High School",
        degree: "High School Graduate",
        duration: "2017 - 2022",
      },
    ],
    items: [
      {
        instituation: "Online course",
        degree: "Front-end",
        duration: "2022",
      },
      {
        instituation: "Online Course",
        degree: "Back-end",
        duration: "2024",
      },
      {
        instituation: "Onlinw course",
        degree: "Wordpress development",
        duration: "2024",
      },
      {
        instituation: "ETEC center",
        degree: "Basic proggraming C/C++",
        duration: "2022",
      },
    ],
  },
];
const skills = [
  {
    tital: "My Skills",
    descrip: "My Skills",
    skillist: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaReact />,
        name: "React JS",
      },
      {
        icon: <SiVite />,
        name: "Vite",
      },
      ,
      {
        icon: <SiTailwindcss />,
        name: "Tailwind",
      },
      {
        icon: <SiAntdesign />,
        name: "AntDesign",
      },
      {
        icon: <FaNodeJs />,
        name: "Node JS",
      },
      {
        icon: <GrMysql />,
        name: "MySQL",
      },
      {
        icon: <FaWordpress />,
        name: "Wordpress",
      },
    ],
  },
];

const Resume = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.3,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex  justify-center lg:mx-[7%]  py-12 lg:py-0 mt-[20px] lg:mt-[70px] mb-[90px]">
      <div className="container mx-auto xl:mx-[7%]">
        <Tab.Group className="flex max-sm:block max-md:block max-lg:block flex- lg:flex-row gap-[60px]">
          <Tab.List className="flex flex-col w-full max-w-[290px] mx-auto lg:mx-0 gap-6 text-primary">
            {["Experience", "Education", "Skills", "About Me"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `inline-flex text-[17px] items-center w-full outline-none font-semibold justify-center whitespace-nowrap rounded-lg p-3 text-balance transition-all
                ${
                  selected
                    ? "bg-accent-DEAULT text-primary shadow-sm"
                    : "text-white bg-[#27272c] hover:bg-accent-DEAULT hover:text-primary"
                }`
                }>
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="min-h-[70vh] w-full mt-[50px] lg:mt-0">
            <Tab.Panel className="w-full">
              {experains.map((item, index) => {
                return (
                  <div
                    className="flex flex-col gap-[30px] text-center lg:text-left "
                    key={index}>
                    <h3 className="text-4xl font-bold"> {item.tital}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px]">
                      {" "}
                      {item.descrip}{" "}
                    </p>
                  </div>
                );
              })}
            </Tab.Panel>
            <Tab.Panel className="w-full min-h-[70vh]">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education[0].tital}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px]">
                  {education[0].descrip}
                </p>
                <div className="h-[460px] lg:h-[250px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education[0].primarySch.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-DEAULT text-[17px]">
                            {item.instituation}
                          </span>
                          <h3 className="text-[25px] max-w-[300px] min-h-[60px] font-extrabold text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex gap-3 items-center">
                            <span className="w-[6px] h-[6px] bg-accent-DEAULT rounded-full"></span>
                            <p className="text-white/60 text-[18px]">
                              {item.duration}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="h-[400px] overflow-y-scroll scrollbar scrollbar-thumb-accent-DEAULT scrollbar-track-none ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-DEAULT text-[17px]">
                          {item.instituation}
                        </span>
                        <h3 className="text-[25px] max-w-[300px] min-h-[60px] font-extrabold text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex gap-3 items-center">
                          <span className="w-[6px] h-[6px] bg-accent-DEAULT rounded-full"></span>
                          <p className="text-white/60 text-[18px]">
                            {item.duration}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold "> {skills[0].tital}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px]">
                    {" "}
                    {skills[0].descrip}{" "}
                  </p>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
                  {skills[0].skillist.map((item, index) => (
                    <li
                      key={index}
                      className="group relative flex items-center justify-center p-1 cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}>
                      <p
                        className={`absolute top-[0px] right-[0px] text-xs whitespace-nowrap ${
                          activeIndex === index
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300 ease-in-out text-[19px] text-primary py-[5px] px-[17px] font-semibold rounded-[5px] bg-white`}>
                        {item.name}
                      </p>
                      <div className="w-full h-[150px] text-center bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl transition-all duration-500 group-hover:text-accent-DEAULT">
                          {item.icon}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab.Panel>
            <Tab.Panel className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].tital} </h3>
                <p className=" max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px]">{about[0].descrip}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {
                    about[0].info.map((info,index)=>{
                      return <li key={index} className="flex items-center justify-center lg:justify-normal gap-4">
                        <span className="text-white/60 text-[18px]"> {info.fieldName} </span>
                        <span className="text-xl"> {info.fieldValue} </span>
                      </li>
                    })
                  }
                </ul>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
};

export default Resume;
