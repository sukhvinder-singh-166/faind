import React from 'react'
import WhiteButton from './common/WhiteButton'

const Avoid = () => {
  return (
    <div className="bg-purple-pink-gradient flex items-center gap-[75px] rounded-[30px] p-[70px]">
      <p className="max-w-[768px] text-6xl font-semibold text-white">
        Avoid empty or irrelevant search results!
        <br /> turn visitors into buyers before they leave!
      </p>
      <div className="flex items-center gap-[18px]">
        <WhiteButton content={'Try demo'} />
        <WhiteButton content={'Learn more'} />
      </div>
    </div>
  )
}

export default Avoid
