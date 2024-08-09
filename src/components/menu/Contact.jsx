import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {Form} from "antd"
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+855) 78 550 172",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Vannak2705@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "St118, Psar Depo2, Toul Kok, Phnom Penh",
  },
];

const ContactInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:h-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full lg:w-[800px]">
              <h3 className="text-4xl text-accent-DEAULT">
                Let's work together
              </h3>
              <p className="text-white/60 w-full text-[18px] ">
                Contact me:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex h-[48px] rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border-accent-DEAULT"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex h-[48px] rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border-accent-DEAULT"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-[48px] rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border-accent-DEAULT"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex h-[48px] rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border-accent-DEAULT"
                />
              </div>
              
              <select 
                  className="flex h-[60px] text-[20px] w-full items-center rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent-DEAULT outline-none"
                  defaultValue="select service"
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                </select>
                <textarea className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50">

                </textarea>
                <button className="max-w-40 active:scale-[0.98] hover:scale-[1.08]  duration-500 cursor-pointer border-2 outline-1 border-accent-DEAULT py-[10px] rounded-[17px] bg-primary text-center justify-center items-center text-white/80 text-[16px]">
                    Send message
                </button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item,index)=>{
                  return <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent-DEAULT rounded-md flex items-center justify-center">
                        <div className="text-[28px]"> {item.icon} </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60"> {item.title} </p>
                        <h3 className="text-xl"> {item.description} </h3>
                      </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
