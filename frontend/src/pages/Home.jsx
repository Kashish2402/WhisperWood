import React from 'react'
import Carousal from '../components/Carousal'
import CottageCard from '../components/CottageCard'
import Testimonials from '../components/Testimonials'
import Packages from '../components/Packages'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-full flex flex-col gap-14'>
      <Carousal/>
      
      <Footer/>
    </div>
  )
}

export default Home
