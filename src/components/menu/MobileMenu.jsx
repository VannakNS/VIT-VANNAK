import React, { useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci'; // Menu icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Service",
    path: "/service"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    name: "Contact",
    path: "/contact"
  },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useResolvedPath();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='text-[25px] text-accent-DEFAULT'>
      <button
        className='p-0 border-none m-0 items-center bg-none sticky opacity-1 top-4 right-4 z-50 text-2xl text-accent-DEAULT mt-[6px]'
        onClick={toggleMenu}
      >
        {isMenuOpen ? <AiOutlineClose /> : <CiMenuFries />}
      </button>
      {isMenuOpen && (
        <div className='flex'>
          <nav className='fixed top-0 right-0 w-[210px] h-screen z-40 bg-gray-800 shadow-lg transition ease-in-out dark:bg-slate-950'>
            <div className='mt-[70px] mx-[20px]'>
              {links.map((item, index) => (
                <a
                  href={item.path}
                  key={index}
                  className={`${
                    item.path === pathname.pathname && 'text-accent-DEAULT border-2 rounded-md border-bcl'
                  } capitalize block font-medium hover:text-accent-hover mt-[30px] text-center transition-all`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
