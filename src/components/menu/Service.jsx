import React from 'react'
import {motion } from "framer-motion"
import {BsArrowDownRight}from "react-icons/bs"


const serviices = [
  {
    num :"01",
    tital:"Web Development",
    description: "I provide custom web development services, creating responsive and user-friendly websites using modern technologies like ReactJS, NodeJS, and SQL. ",
    path: ""
  },
  {
    num :"02",
    tital:"Wordpress Development",
    description: "Specializing in WordPress development, I build dynamic and easy-to-manage websites that empower businesses to achieve their online goals. From custom themes to plugin development, I ensure your WordPress site is functional, scalable, and visually appealing.",
    path: ""
  },
]
const Service =() =>{
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 max-2xl:mx-[7%] max-xl:mt-[-40px] max-lg:mt-[70px]'>
      <div className="container max-auto">
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{
            delay:1,
            duration :0.4,
            ease:"easeInOut"
          }
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {serviices.map((item,index)=>{
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className=' text-[36px] lg:text-[48px] leading-[1.1] font-semibold w-full flex justify-between items-center group-hover:text-accent-DEAULT '>
                  {item.num}
              
                  <a href={item.path} className='text-[36px] max-sm:text-[22px] font-extrabold hover:-rotate-45 group-hover:bg-accent-DEAULT transition-all duration-500 bg-white p-[9px] max-sm:p-[10px] rounded-[50%] items-center'>
                    <BsArrowDownRight className='text-primary'/>
                  </a>
                  </div>
                <h2 className='text-[42px] font-extrabold font-mono leading-none text-white hover:text-accent-DEAULT transition-all duration-500'>
                  {item.tital}
                </h2>
                <p className='text-white/60 text-[18px]'>
                  {item.description}
                </p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Service
