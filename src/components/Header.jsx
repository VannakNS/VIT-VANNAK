import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import MobileMenu from './menu/MobileMenu'

function Header() {
  return (
    <header className='py-8 max-xl:py-12 max-2xl:mx-[6%] '>
        {/* Logo */}
        <div className="container mt-[15px] max-auto flex justify-between max-lg:mt-[-30px]">
            <a href="/" className='items-center'>
              <h1 className='text-4xl font-semibold '>VIT VANNAK<span className='text-accent-DEAULT ml-[9px] '>.</span>
              </h1>
            </a> 


         {/*  Desktop*/}
        <div className='hidden lg:flex items-center gap-8 text-[20px]'>
             <Nav/>
             <a href='/contact' className='' >
             <button className='px-4 bg-accent-DEAULT text-gray-700 py-[5px] rounded-[20px] active:scale-[0.98] hover:scale-[1.08]  duration-500 cursor-pointer'>Hire me</button>
             </a>
         </div>


           {/* Mobile Nav  */}
           <div className='lg:hidden'>
            <MobileMenu/>
           </div>
        </div>
    </header>
  )
}

export default Header
