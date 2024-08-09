import vannak from "../../assets/vannakns.png";
import { motion } from "framer-motion";
const Picture = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{
        delay:1.5,
        duration:0.5,
        ease: "easeInOut"
      }}}>
        <div className=" w-[295px] h-[295px] lg:w-[494px] lg:h-[494px] mix-blend-lighten relative ">
          <img className="rounded-[50%]" src={vannak}  alt="" />
        </div>
      </motion.div>
      <motion.svg className="w-[303px] h-[303px] lg:w-[505px] lg:h-[505px] fill-transparent absolute top-[0px]​ left-0 bottom-0"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
            strokeDasharray : "24 10 0 0",
        }}
        animate={{
            strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
            rotate:[120,360]
        }}
        transition={{
            duration: 20,
            repeat: Infinity,
            repeatType:"reverse"
        }}
        />

      </motion.svg>
    </div>
  );
};

export default Picture;
