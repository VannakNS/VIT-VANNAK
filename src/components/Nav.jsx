import React from 'react'
import { useResolvedPath } from 'react-router-dom'

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Service",
        path: "/service"
    },
    ,
    {
        name: "Resume",
        path: "/resume"
    },
    ,
    {
        name: "Portfolio",
        path: "/portfolio"
    },
    ,
    {
        name: "Contact",
        path: "/contact"
    },
]
const  Nav = () => {
    const pathname = useResolvedPath()
    console.log(pathname)
  return (
    <nav className='flex gap-8 ' >
        {links.map((item,index) => {
            return <a href={item.path} key={index} className={`${item.path === pathname.pathname && "text-accent-DEAULT border-b-2 border-bcl "}capitalize font-medium text hover:text-accent-hover  transition-all`}> {item.name} </a>
        })}
    </nav>
  )
}

export default Nav
