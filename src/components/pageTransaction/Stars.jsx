import {motion,animate} from 'framer-motion'

const starAnimation = {
    anital:{
        top: "0%"
    },
    animate:{
        top: "100%"
    },
    exit: {
        top: ["100%","0%"]
    }
}

const reversIndex = (index)=>{
    const totalSteps=6
    return totalSteps - index -1;
}
const Stars = () =>{
  return (
    <>
    {[...Array(6)].map((_,index)=>{
        return(
    <motion.div key={index} variants={starAnimation} initial="anital"
    animate="animate" exit="exit" transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: reversIndex(index) * 0.1
    }}
    className='h-full w-full bg-white relative'
    />)
    })}
    {/* reder 6 motion ,each repesent a step of the staris , each will have the same animtion */}
    </>
  )
}

export default Stars
