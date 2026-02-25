import React from 'react'
import ConnectSocMed from './ConnectSocMed'
import Navbar from './Navbar'
import Time from './ui/Time'

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen flex justify-center items-center -mt-20 relative">
        <div className="flex flex-col w-3/5 ">
          <p>Hi 👋 my name is</p>
          <p className="text-[64px] font-black brand-color">Marvin Zarate</p>
          <p className="text-5xl font-bold">
            I’m a Product Designer (UI) <br />
            and a Frontend Engineer
          </p>
          <p className="my-3">
            {`My passion lies in creating visually stunning and highly functional web. `}
            <br />
            {`I'm dedicated to staying at the forefront of design and development trends `}
            <br />
            {`to deliver innovative solutions. Let's collaborate to bring your digital vision to life!`}
          </p>
          <a
            className="bg-[#BF4E30] w-fit px-4 py-2 rounded-[5px] text-white cursor-pointer"
            href="mailto:zarate.marvin@gmail.com"
          >
            Let’s connect! 🚀
          </a>
        </div>
        <ConnectSocMed />
      </section>
      <Time />
      <div className="w-[1px] h-[768.5px] left-14 absolute bg-black top-24 opacity-40" />
      {/* <div className='w-[1px] h-[650px] right-14 absolute bg-black top-24 opacity-40' /> */}
    </>
  );
}

export default HeroSection