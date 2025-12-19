import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center  px-10 py-4 font-bold brand-color  z-10'>
      <div className='flex justify-center items-center gap-10'>
      <Link href="/" className=' font-black text-5xl'><Image alt='Marvin Zarate Logo' src='/logo.svg' height={44.7} width={54.73} /></Link>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
      <p className='text-[#303030] font-medium'>{`"With God all things are possible" - Matthew 19:26`}</p>
      <p>Based in The Philippines</p>
    </header>
  )
}

export default Navbar