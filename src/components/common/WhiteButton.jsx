import React from 'react'
import { GradientArrow } from './Icons'

const WhiteButton = ({ content, className }) => {
  return (
    <button
      className={`flex items-center gap-6 rounded-xl bg-white px-[30px] py-6 transition-all duration-300 ease-in-out hover:scale-95 ${className}`}
    >
      <span className="bg-purple-pink-gradient bg-clip-text text-base font-semibold text-transparent">
        {content}
      </span>
      <GradientArrow />
    </button>
  )
}

export default WhiteButton
