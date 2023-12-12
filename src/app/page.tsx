'use client'

import React from 'react'
import Image from 'next/image'
import ContactForm from './Components/ContactForm/ContactForm'
import { Avatar } from "@mantine/core";

const Main = () => {
  return (
    <>
    {/* <div className='fixed flex w-full justify-between z-10 items-center py-4 px-[9vw] cursor-default'>
        <div className='flex items-center gap-4'> <Avatar src="/marvz.jpg" size='xl' alt="it's me" /> 
          <div className='flex gap-4'>
            <span className='flex items-center gap-1 p-2 bg-green-200 rounded-full'><div className='text-[8px] leading-none relative inline-block w-[10px] h-[10px] bg-[#34ff4a] rounded-[50%] ' /> Available for work</span>
          </div>
        </div>
      </div> */}
      {/* <div className='fixed flex w-full justify-between bottom-0 z-10 h-14 items-center px-[1vw] cursor-default'>
            <span>Scroll down [ v ]</span>
            <div>2023</div>
      </div> */}
    <div className='relative w-[100svw]'>
      <div className='w-full h-[120svh] bg-[#D9D9D9]'>
        <div className='fixed top-0 z-0 flex items-center w-full h-full'>
          <div className='sm:w-1/2 w-full flex flex-col sm:pl-[9vw] mt-48 sm:items-start items-center'>
            {/* <div className=' flex w-full justify-between z-10 items-center py-4  cursor-default'> */}
              <div className='flex sm:flex-row flex-col items-center gap-4 py-4'> 
                <Avatar src="/marvz.jpg" size='xl' alt="it's me" /> 
                <div className='flex gap-4'>
                  <span className='flex items-center gap-2 py-2 px-4 bg-green-200 rounded-full border-[#34ff4a] border'>
                    <div className='text-[8px] leading-none relative inline-block w-[10px] h-[10px] bg-[#34ff4a] rounded-[50%] ' /> 
                    Available for work
                  </span>
                </div>
              </div>
            {/* </div> */}
            <p className='sm:text-4xl text-sm'>{`Hi! I'm`} <span className='text-[#7EA0B7]'>Marvin Zarate</span> and</p>
            <p className='sm:text-8xl text-3xl font-light'>{`I'm a Frontend`}</p>
            <p className='sm:text-8xl text-4xl font-black'>{`Developer`}</p>
          </div>
          <div className='w-1/2 h-full sm:block hidden'>
            {/* <img src='/marvz.jpg' /> */}
            </div>
        </div>
      </div>
      <div className='w-full h-[120svh] bg-[#7EA0B7]' style={{'clipPath':'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'}}>
        <div className='fixed top-0 z-10 flex items-center w-full h-full'>
          <div className='sm:w-1/2 w-full flex flex-col sm:pl-[9vw] mt-48 sm:items-start items-center text-white'>
            {/* <div className=' flex w-full justify-between z-10 items-center py-4  cursor-default'> */}
              <div className='flex sm:flex-row flex-col items-center gap-4 py-4'>
                <Avatar src="/marvz.jpg" size='xl' alt="it's me" /> 
                <div className='flex gap-4'>
                  <span className='flex items-center gap-2 py-2 px-4 bg-green-200 rounded-full border-[#34ff4a] border text-black'>
                    <div className='text-[8px] leading-none relative inline-block w-[10px] h-[10px] bg-[#34ff4a] rounded-[50%] ' />
                    Available for work
                  </span>
                </div>
              </div>
            {/* </div> */}
            <p className='sm:text-4xl text-sm'>{`Hi! I'm`} <span className='text-[#232F28]'>Marvin Zarate</span> and</p>
            <p className='sm:text-8xl text-3xl font-extralight'>{`I'm a UI/UX`}</p>
            <p className='sm:text-8xl text-4xl font-black'>Designer</p>
          </div>
          <div className='w-1/2 h-full sm:block hidden'>
            {/* <img src='/marvz.jpg' /> */}
            </div>
        </div>
      </div>
      <div className='w-full relative z-20 bg-[#E5EDF1] top-0'>
        <div className='flex flex-col items-center gap-10 w-full h-full py-14 px-[9vw]'>
          <p className='sm:text-[50px] text-4xl'>About</p>
          <p className=' sm:w-[70%] w-full text-center sm:text-lg text-base'>
            {`Marvz`}, {`I’m a versatile professional who started as a graphic designer and transitioned into Web development. I specialize in web design using Figma, and I'm proficient in React.js, Next.js, and Webflow. My passion lies in creating visually stunning and highly functional websites. I'm dedicated to staying at the forefront of design and development trends to deliver innovative solutions. Let's collaborate to bring your digital vision to life!`}
            </p>
            <p className='text-[25px]'>Sample Works</p>
            <div className='grid sm:grid-flow-col grid-flow-row gap-6 w-full'>
              <div className='card row-span-4 bg-white h-60 flex justify-center items-center'>
                <Image alt='html logo' src='/images/betterteem-logo.svg' height={200} width={100}/>
              </div>
              <div className='card row-span-4 bg-white h-60  flex justify-center items-center'>
              <Image alt='html logo' src='/images/taxikel.png' height={200} width={100}/>
              </div>
              <div className='card row-span-4 bg-white h-60 flex justify-center items-center'>
              <Image alt='html logo' src='/images/rnr.png' height={200} width={100}/>
              </div>
            </div>
        </div>
      </div>
      <div className='w-full sm:h-[100vh] relative z-20 bg-[#232F28] text-white top-0'>
        <div className='flex flex-col items-center gap-10 w-full h-full py-14 px-[9vw]'>
          <p className='sm:text-[50px] text-4xl'>Tech stack</p>
            <div className='grid sm:grid-rows-2 sm:grid-cols-4 grid-rows-4 grid-cols-2 gap-10 w-full h-full py-10'>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='html logo' src='/images/html.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image  alt='css logo' src='/images/css.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='javascript logo' src='/images/js.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='react logo' src='/images/react.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='nextjs logo' src='/images/nextjs.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='webflow logo' src='/images/webflow.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='wordpress logo' src='/images/wordpress.png' height={100} width={100}/></div>
                <div className='flex justify-center items-center w-full h-[250px] bg-[#00000010]'><Image alt='mysql logo' src='/images/mysql.png' height={100} width={100}/></div>
            </div>
        </div>
      </div>
      <div className='w-full h-[100vh] relative z-20 bg-white top-0'>
          <div className='flex flex-col items-center gap-10 w-full h-full py-14 px-[9vw]'>
            <p className='sm:text-[50px] text-4xl'>Contact me</p>
            <ContactForm />
          </div>
        </div>
    </div>
    </>
  )
}

export default Main