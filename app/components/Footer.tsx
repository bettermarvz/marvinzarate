import { Facebook, Github, Instagram, Mail, MapPin,  Smartphone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex py-10'>
      <div className=' flex justify-between mx-auto items-center w-3/5 gap-10'>
        <div className='w-2/5 '>
          <h1 className='text-xl font-bold'>{`Let's connect!`}</h1>
          <form method='post' action='https://formspree.io/f/mvzpbzaq' className='flex flex-col gap-2 [&_input]:bg-white [&_input]:border-black/10 [&_textarea]:bg-white [&_textarea]:border-black/10'>
            <input name='name' className='border rounded-md p-2 w-full' type="text" placeholder='Your name' />
            <input  name='email' className='border rounded-md p-2 w-full' type="email" placeholder='Enter your email' />
            <textarea name='message' className='border rounded-md p-2 w-full' placeholder='Message' />
            <button className='bg-[#BF4E30] px-4 py-2 rounded-[5px] text-white w-full' type='submit'>Send</button>
          </form>
        </div>
        <div className='flex flex-col gap-4 [&>*]:flex [&>*]:items-start [&>*]:gap-2 text-black w-1/4'>
          <p><MapPin /> AB Navato Street, Poblacion Bugallon, Pangasinan, 2416</p>
          <p><Mail/> zarate.marvin@gmail.com</p>
          <p><Smartphone />+63 9187840443</p>
        </div>
        <div className='flex flex-col gap-4 [&>*]:flex [&>*]:items-center [&>*]:gap-2 text-black'>
          <a href='https://www.facebook.com/marvinpzarate' target='new'><Facebook /> Facebook</a>
          <a href='https://www.instagram.com/daddymarvz/' target='new'><Instagram/> Instagram</a>
          <a href='https://github.com/betterMarvz' target='new'><Github />Github</a>
        </div>
      </div>
      {/* <div>SocMed</div> */}
    </section>
  )
}

export default Footer