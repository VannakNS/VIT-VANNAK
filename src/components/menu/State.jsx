import CountUp from 'react-countup'


const states = [
    {
        num:0,
        text: "Years of experience"
    },
    {
        num:4,
        text: "Projects completed"
    },
    {
        num:0,
        text: "Techologies master"
    },
    {
        num:9,
        text: "Code commit"
    },
]
const  State = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vh] mx-auto lg:max-w-none'>
                {
                    states.map((item,index) =>{
                        return <div key={index} className='flex-1 flex gap-4 items-center justify-center lg:justify-start'>
                            <CountUp end={item.num} duration={5} delay={2} className='text-4xl lg:text-6xl font-extrabold'/>
                        <p className={`${item.text.length < 15? "max-w-[100px]":"max-w-[150px]" }leading-snug text-white/80 text-[15px]`}>{item.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default State
