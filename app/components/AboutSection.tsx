import CSSIcon from '@/public/Icons/CSSIcon'
import FigmaIcon from '@/public/Icons/FigmaIcon'
import GitIcon from '@/public/Icons/GitIcon'
import HTMLIcon from '@/public/Icons/HTMLIcon'
import JavascriptIcon from '@/public/Icons/JavascriptIcon'
import NextJsIcon from '@/public/Icons/NextJsIcon'
import ReactJsIcon from '@/public/Icons/ReactJsIcon'
import TailwindIcon from '@/public/Icons/TailwindIcon'
import TypeScriptIcon from '@/public/Icons/TypeScriptIcon'
import WebflowIcon from '@/public/Icons/WebflowIcon'
import WordpressIcon from '@/public/Icons/WordpressIcon'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='flex justify-center items-center bg-[#C8D6DE] text-black py-20'>
      <div className='w-3/5 flex gap-[50px]'>
      <div className=''><Image src='/profile.png' alt='profile-photo' height={260} width={260}/></div>
      <div className='flex-1 flex flex-col gap-6'><h1 className='text-2xl'>About</h1>
      <p className='text-left'>
        I began my professional career in 2010 as a graphic designer, gradually building my path in the creative industry. Over the years, my passion for innovation inspired me to explore website development, allowing me to merge design with technology.
        <br /><br />
        With a strong background in both design and web development, I eventually transitioned into software development. Today, I work as a Frontend Software Engineer and UI Designer, where I apply my experience to craft intuitive, functional, and visually engaging user interfaces.
        <br /><br />
        I remain deeply committed to continuous growth—constantly refining my skills, embracing new challenges, and keeping pace with the fast-changing world of technology.
      </p>
      <h2 className='font-bold'>Acquired skills</h2>
      <div className='flex items-center gap-8'>
        <HTMLIcon/>
        <CSSIcon/>
        <JavascriptIcon />
        <TailwindIcon/>
        <ReactJsIcon/>
        <NextJsIcon/>
        <TypeScriptIcon/>
        <GitIcon/>
        <WebflowIcon/>
        <WordpressIcon/>
        <FigmaIcon/>
      </div>
      </div>
      </div>
    </section>
  )
}

export default AboutSection