import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/png/logo.png'
import { navOptions } from './Helper'
import Button from './Button'

const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className="bg-white py-[42px]">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              src={logo}
              alt="logo"
              className="max-h-[48px] w-full max-w-[200px] xl:max-w-[236px]"
            />
          </a>
          <ul className="flex items-center gap-9">
            {navOptions.map((option, i) => {
              const isActive =
                currentPath === '/' && option.title.toLowerCase() === 'home'
                  ? true
                  : currentPath.includes(option.href)
              return (
                <li key={i}>
                  <a
                    href={option.href}
                    className={`relative text-base font-normal capitalize ease-in-out after:absolute after:bottom-[-1px] after:start-[50%] after:h-[1.5px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:start-0 hover:after:w-full md:text-lg ${isActive ? 'bg-purple-pink-gradient after:!bg-purple-pink-gradient bg-clip-text text-transparent after:!start-0 after:!w-full' : 'text-black'}`}
                  >
                    {option.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-6">
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
