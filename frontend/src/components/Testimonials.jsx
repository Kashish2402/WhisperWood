import React from 'react'
import { Profile1, Profile2, Profile3, Profile4 } from '../assets'
import {Star, StarHalf} from "lucide-react"

function Testimonials() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold test relative z-10'>Testimonials</h1>

<div className='flex items-center flex-nowrap gap-10'>
      <div className='bg-[#121212] h-[350px] w-[300px] flex items-center justify-center gap-4 border border-gray-500 rounded-2xl  flex-col py-2 '>
        <div className='h-30 w-30 rounded-full overflow-hidden '>
            <img src={Profile1} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text-2xl text-center'>Rahul S. </h1>
            <p className='flex '>⭐⭐⭐⭐</p>
            <p className='italic text-sm text-white/50 px-3'>“Great experience overall. The cottage was beautiful and had a stunning lake view. The only reason I'm giving 4 stars instead of 5 is because the Wi-Fi was a bit spotty, but honestly, disconnecting wasn’t a bad thing. Highly recommend for a peaceful getaway.”</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[350px] w-[300px] flex items-center justify-center gap-4 border border-gray-500 rounded-2xl  flex-col py-2 '>
        <div className='h-30 w-30 rounded-full overflow-hidden '>
            <img src={Profile2} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text-2xl text-center'>Sarah M. </h1>
            <p className='flex '>⭐⭐⭐⭐⭐</p>
            <p className='italic text-sm text-white/50 px-3'>“Absolutely loved our stay! The booking process was super easy, and the photos matched exactly what we got. The cottage was clean, cozy, and perfectly located near hiking trails. Will definitely be booking again for the fall season!”</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[350px] w-[300px] flex items-center justify-center gap-4 border border-gray-500 rounded-2xl  flex-col py-2 '>
        <div className='h-30 w-30 rounded-full overflow-hidden '>
            <img src={Profile3} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text-2xl text-center'>Emily T. </h1>
            <p className='flex '>⭐⭐⭐⭐⭐</p>
            <p className='italic text-sm text-white/50 px-3'>“This was our second time booking through this site, and it was just as smooth as the first. The cottage was well-maintained, with thoughtful touches like board games, a fire pit, and a welcome basket. Customer support was responsive too. Perfect weekend retreat!”</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[350px] w-[300px] flex items-center justify-center gap-4 border border-gray-500 rounded-2xl  flex-col py-2 '>
        <div className='h-30 w-30 rounded-full overflow-hidden '>
            <img src={Profile4} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text-2xl text-center'>James L </h1>
            <p className='flex '>⭐⭐⭐</p>
            <p className='italic text-sm text-white/50 px-3'>“The location was great and the views were breathtaking, but we had a couple of issues with cleanliness on arrival. The team did respond quickly and offered compensation, which we appreciated. Could be perfect with a bit more attention to detail.”</p>
        </div>
      </div>

      
      </div>
    </div>
  )
}

export default Testimonials
