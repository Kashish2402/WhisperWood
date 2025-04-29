import React from 'react'

function Packages() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-20'>
      <h1 className='text-4xl font-bold package relative z-10'>
        Packages
      </h1>

      <div className='flex flex-nowrap items-center justify-center gap-10'>
        <div className='w-[350px] bg-white/10 border border-white/50 py-7 rounded-3xl flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-bold '>Cozy Gateway Package</h1>
        <p className='text-sm text-white/50 italic mt-3'>Ideal for Couples / Small Families</p>

        <div className='mt-5'>
          <div>
          <span className='font-bold mr-3'>Pax:</span>
          <span className='text-white/70'>2 - 3 Persons</span>
          </div>

          <div>
          <span className='font-bold mr-3'>Duration:</span>
          <span className='text-white/70'>2 Nights / 3 Days</span>
          </div>

          <div>
          <span className='font-bold mr-3'>Price:</span>
          <span className='text-white/70'>₹ 7,999 /package</span>
          </div>
          
        </div>

        <div className="mt-5">
          <h1 className='font-bold text-2xl'>Ameneties & Services :</h1>
          <ul className='flex flex-col items-center justify-center gap-2 '>
            <li>Private cottage stay with queen-sie bed</li>
            <li>Complimentary breakfast</li>
            <li>Wi-Fi access</li>
            <li>Hot-water & Toiletories</li>
            <li>BonFire for One Evening</li>
            <li>Guided nature walk or sunrise point trek</li>
          </ul>
        </div>

        <button className='w-[90%] mt-4 bg-blue-700  py-2 text-xl  rounded-xl text-white'>Purchase</button>
        </div>

        <div className='w-[350px] bg-white/10 border border-white/50 py-7 rounded-3xl flex flex-col  items-center justify-center '>
        <h1 className='text-3xl font-bold '>Friends & Fun Package</h1>
        <p className='text-sm text-white/50 italic mt-3'>Ideal for Small Groups</p>

        <div className='mt-5'>
          <div>
          <span className='font-bold mr-3'>Pax:</span>
          <span className='text-white/70'>4 - 6 Persons</span>
          </div>

          <div>
          <span className='font-bold mr-3'>Duration:</span>
          <span className='text-white/70'>2 Nights / 3 Days</span>
          </div>

          <div>
          <span className='font-bold mr-3'>Price:</span>
          <span className='text-white/70'>₹ 14,999 /package</span>
          </div>
          
        </div>

        <div className="mt-5">
          <h1 className='font-bold text-2xl'>Ameneties & Services :</h1>
          <ul className='flex flex-col items-center justify-center gap-2 '>
            <li>2 Cottages & 1 large family cottage</li>
            <li>All meals included (Breakfast, Lunch, Dinner)</li>
            <li>Board Games & Mini-Sports Equipment</li>
            <li>Evening BBQ Setup (ingredients chargeable)</li>
            <li>Free Parking</li>
            <li>Bonfire with music night</li>
          </ul>
        </div>

        <button className='w-[90%] mt-4 bg-blue-700  py-2 text-xl  rounded-xl text-white'>Purchase</button>
        </div>

        <div className='w-[350px] bg-white/10 border border-white/50 py-7 rounded-3xl flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-bold '>Nature & Wellness Retreat</h1>
        <p className='text-sm text-white/50 italic mt-3'>Ideal for Solo Travellers / Couples Seeking Relaxation</p>

        <div className='mt-5'>
          <div>
          <span className='font-bold mr-3'>Pax:</span>
          <span className='text-white/70'>1 - 2 Persons</span>
          </div>

          <div>
          <span className='font-bold mr-3'>Duration:</span>
          <span className='text-white/70'>3 Nights / 4 Days</span>
          </div>

          <div>
          <span className='font-bold mr-3'>Price:</span>
          <span className='text-white/70'>₹ 11,999 /package</span>
          </div>
          
        </div>

        <div className="mt-5">
          <h1 className='font-bold text-2xl'>Ameneties & Services :</h1>
          <ul className='flex flex-col items-center justify-center gap-2 '>
            <li>Private premium cottage</li>
            <li>All organic vegetarian meals</li>
            <li>Morning Yoga & meditation session</li>
            <li>Herbal Tea & Detox drinks</li>
            <li>Guided forest therapy walk</li>
            <li>In Room spa/massage (one - session)</li>
          </ul>
        </div>

        <button className='w-[90%] mt-4 bg-blue-700  py-2 text-xl  rounded-xl text-white'>Purchase</button>
        </div>
      </div>
    </div>
  )
}

export default Packages
