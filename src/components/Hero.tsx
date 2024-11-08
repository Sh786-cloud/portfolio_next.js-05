import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.png)]'
    style={{backgroundSize: "35", backgroundPosition: "left 225px top 175px"}}
    >
    <Navbar/>
    <div className='container grid grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center pt-20'>
        <div>
          <p data-aos="zoom-in-up">I&#39;m</p>
          <p data-aos="zoom-in-up">Engr.</p>
          <p data-aos="zoom-in-up">M Shahzeb</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
