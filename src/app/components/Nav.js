"use client";
import React, { useState } from 'react';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

    return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
                  <div className="ml-1">
                   <img src='/Crafto.svg' alt='Logo' width={130} height={29} className="ml-10"/>
                  </div>
            
              {showMenu && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen overscroll-none bg-white z-50 flex justify-center items-center">
            <ul className="p-4 flex flex-col items-center space-y-10 text-[16px] text-nav-color">
              <li>
                <button className="px-4 py-2" onClick={closeMenu}>
                {showMenu ? (
                              <img src="/close.svg" alt="Hamburger" width={25} height={25} className=''/>
                            ) : (
                              <img src="/hamburger.svg" alt="Hamburger" width={25} height={25} className=''/>
                            )}
                </button>
              </li>
              <li>
                <a onClick={toggleMenu}>Начало</a>
              </li>
              <li className='mb-4'>
                <a onClick={toggleMenu}>За нас</a>
              </li>
              <li className='mb-4'>
                <a onClick={toggleMenu}>Услуги</a>
              </li>
              <li className='mb-4'>
                <a onClick={toggleMenu}>Цени</a>
              </li>
              <li className='mb-4'>
                <a onClick={toggleMenu}>Как работи</a>
              </li>
              <li className='mb-4'>
                <a onClick={toggleMenu}>Контакти</a>
              </li>
              <li className='mb-4'>
                <p className="mt-[50px]" onClick={toggleMenu}>Профил</p>
              </li>
              <li className='mb-4'>
                <button className="border-2 font-semibold border-primary-color-t py-3 px-3 rounded-lg" onClick={toggleMenu}>
                  Заявка за пратка
                </button>
              </li>
            </ul>
          </div>
        )}
          <ul className='flex-1 flex justify-center items-center px-9 gap-2 max-lg:hidden p-5 text-nav-color cursor-pointer text-[16px]'>
              <li className="py-3 px-4 hover:bg-primary-color-t hover:text-white hover:rounded-lg">Начало</li>
              <li className="py-3 px-4 hover:bg-primary-color-t hover:text-white hover:rounded-lg">За нас</li>
              <li className="py-3 px-4 hover:bg-primary-color-t hover:text-white hover:rounded-lg">Услуги</li>
              <li className="py-3 px-4 hover:bg-primary-color-t hover:text-white hover:rounded-lg">Цени</li>
              <li className="py-3 px-4 hover:bg-primary-color-t hover:text-white hover:rounded-lg">Как работи</li>
              <li className="py-3 px-4 hover:bg-primary-color-t hover:text-white hover:rounded-lg">Контакти</li>
          </ul>
  
          <ul className='flex justify-end items-center gap-5 max-lg:hidden p-5 text-nav-color text-[16px]'> 
              <li className="mr-5 cursor-pointer">Профил</li>
              <li className="border-2 font-semibold border-primary-color-t py-3 px-3 rounded-lg cursor-pointer">Заявка за пратка</li>
          </ul>
          <div className='hidden max-lg:block'> 
            <button onClick={toggleMenu}>
              <img src="/hamburger.svg" alt="Hamburger" width={25} height={25} className='mr-5'/>            
           </button>
          </div>
          
      </nav>
  </header>
    )
  }
  
  export default Nav