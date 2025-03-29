import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/png/logo.png'
import { navOptions } from './Helper'
import Button from './Button'
import cross from '../../assets/images/svg/cross.svg'
import menu from '../../assets/images/svg/menu.svg'
const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className="fixed top-0 z-10 w-full bg-white py-4">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-10">
            <img
              src={logo}
              alt="logo"
              className="max-h-[48px] w-full max-w-[117px] sm:max-w-[150px] md:max-w-[200px] xl:max-w-[236px]"
            />
          </a>
          <button
            className="relative z-10 text-2xl text-black xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              className="h-[26px] w-[26px]"
              src={isOpen ? cross : menu}
              alt={isOpen ? 'cross' : 'menu'}
            />
          </button>
          <ul
            className={`absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-white transition-transform duration-300 ease-in-out xl:relative xl:h-auto xl:w-auto xl:!translate-x-0 xl:flex-row xl:gap-9 xl:bg-transparent xl:p-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            {navOptions.map((option, i) => {
              const isActive =
                currentPath === '/' && option.title.toLowerCase() === 'home'
                  ? true
                  : currentPath.includes(option.href)
              return (
                <li key={i} className="mb-4 xl:mb-0">
                  <a
                    href={option.href}
                    className={`relative text-lg font-normal capitalize ease-in-out after:absolute after:bottom-[-1px] after:start-[50%] after:h-[1.5px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:start-0 hover:after:w-full ${isActive ? 'bg-purple-pink-gradient after:!bg-purple-pink-gradient bg-clip-text text-transparent after:!start-0 after:!w-full' : 'text-black'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {option.title}
                  </a>
                </li>
              )
            })}
            <li className="mb-4 xl:hidden">
              <a
                href="#"
                className="hover:bg-purple-pink-gradient bg-transparent text-base font-medium text-black transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent"
              >
                Sign Up
              </a>
            </li>
            <li className="xl:hidden">
              <Button content={'book a demo'} />
            </li>
          </ul>
          <div className="hidden items-center gap-6 xl:flex">
            {' '}
            <a
              href="#"
              className="hover:bg-purple-pink-gradient bg-transparent text-base font-medium text-black transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent"
            >
              Sign Up
            </a>
            <Button content={'book a demo'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
