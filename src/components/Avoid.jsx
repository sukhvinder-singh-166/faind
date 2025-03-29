import React from 'react'
import WhiteButton from './common/WhiteButton'

const Avoid = () => {
  return (
    <div className="bg-purple-pink-gradient translate-y-[50%] flex flex-col items-center gap-[30px] rounded-[30px] px-[27px] py-[60px] lg:flex-row lg:gap-[50px] lg:p-[70px] xl:gap-[75px]">
      <p className="max-w-[768px] text-center text-5xl font-semibold text-white lg:text-start xl:text-6xl">
        Avoid empty or irrelevant search results!
        <br className="hidden xl:block" /> turn visitors into buyers before they
        leave!
      </p>
      <div className="flex flex-col items-center gap-[18px] md:flex-row">
        <WhiteButton content={'Try demo'} />
        <WhiteButton content={'Learn more'} />
      </div>
    </div>
  )
}

export default Avoid
