import { Mail, MapPin,  Smartphone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex py-20'>
      <div className='w-3/5'>
        <div>Form</div>
        <div className='flex flex-col gap-4'>
          <p className='flex items-center gap-2'><MapPin /> AB Navato Street, Poblacion Bugallon, Pangasinan, 2416</p>
          <p className='flex items-center gap-2'><Mail/> zarate.marvin@gmail.com</p>
          <p className='flex items-center gap-2'><Smartphone />+63 9187840443</p>
        </div>
      </div>
      {/* <div>SocMed</div> */}
    </section>
  )
}

export default Footer