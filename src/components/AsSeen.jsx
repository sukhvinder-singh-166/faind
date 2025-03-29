import React from 'react'
import { asSeenCompany } from './common/Helper'
import Avoid from './Avoid'
const AsSeen = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 pt-[60px] lg:pt-[90px]">
      <p className="mb-8 text-center text-2xl font-medium text-black">
        As Seen On
      </p>
      <div className="mb-[60px] flex items-center justify-between gap-4 md:mb-[80px] lg:mb-[100px] lg:gap-10 xl:mb-[120px]">
        {asSeenCompany.map((item, i) => {
          return (
            <div
              key={i}
              className="flex max-h-[96px] max-w-[240px] items-center justify-center"
            >
              <img src={item} alt="company" />
            </div>
          )
        })}
      </div>
      <Avoid />
    </div>
  )
}

export default AsSeen
