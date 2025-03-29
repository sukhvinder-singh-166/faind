import React from 'react'
import Navbar from './common/Navbar'
import heroImage from '../assets/images/png/hero.png'
import { Search } from './common/Icons'
import { heroOptions } from './common/Helper'
const Hero = () => {
  return (
    <div className="bg-light-purple flex min-h-screen flex-col pt-[80px]">
      <Navbar />
      <div className="relative flex h-full flex-grow flex-col items-start justify-center">
        <img
          src={heroImage}
          alt="hero"
          className="max-w-[1000px absolute end-0 top-[117px] max-h-[700px]"
        />
        <div className="mx-auto h-full w-full max-w-[1440px] px-4">
          <p className="bg-purple-pink-gradient bg-clip-text text-transparent">
            #1 SYSTEM TO GENERATE 5-STAR GOOGLE REVIEWS
          </p>
          <p className="mb-[18px] mt-3 max-w-[640px] text-6xl font-semibold">
            The Premier Search Engine for your Online Store
          </p>
          {heroOptions.map((items, i) => {
            return (
              <div className="mb-3 flex items-center gap-3" key={i}>
                {items.icon}
                <p className="text-light-black text-lg">{items.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero
