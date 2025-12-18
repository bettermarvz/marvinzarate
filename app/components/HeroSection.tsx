import React from 'react'
import ConnectSocMed from './ConnectSocMed'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <>
    <Navbar />
    <section className='h-screen flex justify-center items-center -mt-20 relative'>
        <div className='flex flex-col w-3/5 '><p>Hi 👋 my name is</p>
        <p className='text-[64px] font-black brand-color'>Marvin Zarate</p>
        <p className='text-5xl font-bold'>I’m a Frontend Software Engineer<br />and a UI Designer</p>
        <p className='my-3'>{`My passion lies in creating visually stunning and highly functional web. `}<br />
        {`I'm dedicated to staying at the forefront of design and development trends `}<br />
        {`to deliver innovative solutions. Let's collaborate to bring your digital vision to life!`}</p>
        <button className='bg-[#BF4E30] w-fit px-4 py-2 rounded-[5px] text-white'>Let’s connect! 🚀</button>
        </div>
        <ConnectSocMed/>
        </section>
        </>
  )
}

export default HeroSection