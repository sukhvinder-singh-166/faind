import React from 'react'

const Button = ({ content, className }) => {
  return (
    <button
      className={`bg-purple-pink-gradient rounded-md border-e-slate-50 px-[42px] py-[22px] text-base font-semibold uppercase text-white transition-all duration-300 hover:scale-95 ${className}`}
    >
      {content}
    </button>
  )
}

export default Button
