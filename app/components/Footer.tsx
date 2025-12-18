import { Mail, MapPin,  Smartphone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex py-10'>
      <div className='w-3/5 flex justify-between mx-auto items-center'>
        <div className='w-1/2'>
          <h1 className='text-xl font-bold'>{`Let's connect!`}</h1>
          <form className='flex flex-col gap-2'>
            <input className='border border-black rounded-md p-2 w-full' type="text" placeholder='Your name' />
            <input className='border border-black rounded-md p-2 w-full' type="email" placeholder='Enter your email' />
            <textarea className='border border-black rounded-md p-2 w-full' placeholder='Message' />
            <button className='bg-[#BF4E30] w-fit px-4 py-2 rounded-[5px] text-white' type='submit'>Send</button>
          </form>
        </div>
        <div className='flex flex-col gap-4 [&>*]:flex [&>*]:items-center [&>*]:gap-2 text-black'>
          <p><MapPin /> AB Navato Street, Poblacion Bugallon, Pangasinan, 2416</p>
          <p><Mail/> zarate.marvin@gmail.com</p>
          <p><Smartphone />+63 9187840443</p>
        </div>
      </div>
      {/* <div>SocMed</div> */}
    </section>
  )
}

export default Footer