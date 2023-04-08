import React from 'react'
import { EventsButton } from './EventsButton'

export const Events = () => {
  return (
    <div className='flex flex-col gap-3 bg-[#F2EAF2] rounded-md'>
        <p className="text-2xl font-bold p-2 mx-auto text-[#AB877D]">
        Events
      </p>
      <div className=" flex flex-row snap-x text-white snap-mandatory pb-10 scroll-smooth overflow-x-auto flex-nowrap scrollbar-hide md:h-full md:p-5 items-center">
        <div className="bg-cover p-3 snap-center w-full md:w-1/3  h-full shadow-md rounded-none flex-shrink-0"><EventsButton/></div>
        <div className="bg-cover p-3 snap-center w-full md:w-1/3  h-full shadow-md rounded-none flex-shrink-0"><EventsButton/></div>
        <div className="bg-cover p-3 snap-center w-full md:w-1/3  h-full shadow-md rounded-none flex-shrink-0"><EventsButton/></div>
        <div className="bg-cover p-3 snap-center w-full md:w-1/3  h-full shadow-md rounded-none flex-shrink-0"><EventsButton/></div>
        <div className="bg-cover p-3 snap-center w-full md:w-1/3  h-full shadow-md rounded-none flex-shrink-0"><EventsButton/></div>
      </div>
    </div>
  )
}
