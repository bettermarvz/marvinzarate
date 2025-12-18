import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center  px-10 py-4 font-bold brand-color  z-10'>
      <Link href="/" className=' font-black text-5xl'>MZ</Link>
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
    </header>
  )
}

export default Navbar