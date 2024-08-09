import React from 'react'
import {AnimatePresence,motion} from "framer-motion"
import { useResolvedPath } from 'react-router-dom'
import Stars from './Stars'

const StairEfffect = () => {
    const pathname = useResolvedPath()
  return (
    <>
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
            <Stars/>
        </div>
        {/* <motion.div className='h-screen w-screen fixed top-0 bg-primary pointer-events-none'
        initial={{opacity: 1}}
        animate={{
            opacity: 0,
            transition: {
                delay: 1,
                duration:0.4,
                ease: "backInOut"
            }
        }}
        /> */}
      </div>
    </AnimatePresence>
    </>
  )
}
export default StairEfffect
