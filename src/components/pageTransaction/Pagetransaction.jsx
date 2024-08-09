import React from 'react'
import  {AnimatePresence,motion} from "framer-motion"
import { useResolvedPath } from 'react-router-dom'

const Pagetransaction =({children}) =>{
    const patname = useResolvedPath()
  return (
    <AnimatePresence>
      <div key={patname}>
        <motion.div
            initial={{opacity:1}}
            animate={{
                opacity: 0,
                transition: { delay:0.3 ,duration:0.5, ease:"easeInOut"},
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"

        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default Pagetransaction
