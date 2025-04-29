import React from "react";
import { cottage2, cottage3, cottage4, cottage5, cottage6, cottage7, cottage8 } from "../assets";
function CottageCard() {
  return (
    <div id="cottage" className='flex flex-col items-center justify-center gap-20'>
      <h1 className='text-4xl font-bold cottage relative z-10'>Our Cottages</h1>
      <div className='w-[80vw] flex flex-nowrap items-center scroll-smooth snap-normal gap-10 overflow-x-scroll card'>

        <div className='min-w-[300px] h-[500px] rounded-2xl overflow-hidden' >
            <img src={cottage2} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>

        <div className='min-w-[300px] h-[500px] rounded-2xl overflow-hidden'>
            <img src={cottage3} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>

        <div className='min-w-[300px] h-[500px] rounded-2xl overflow-hidden'>
            <img src={cottage4} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>

        <div className='min-w-[300px] h-[500px] rounded-2xl overflow-hidden'>
            <img src={cottage5} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>
        <div className='md:min-w-[300px] h-[500px] rounded-2xl overflow-hidden'>
            <img src={cottage6} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>
        <div className='min-w-[300px] h-[500px] rounded-2xl overflow-hidden'>
            <img src={cottage7} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>
        <div className='min-w-[300px] h-[500px] rounded-2xl overflow-hidden'>
            <img src={cottage8} alt="" className='h-full w-full object-cover object-center opacity-65'/>
        </div>
      </div>
    </div>
  )
}

export default CottageCard;
