import Image from 'next/image'
import React from 'react'

const ConnectSocMed = () => {
  return (
    <div className='fixed left-0 bottom-0 py-3 px-4 flex items-center gap-2'>
        <p className='mr-2'>Connect</p> 
        <Image src='/linkedIn.svg' alt='Connect to my LinkedIn' height={35} width={35}/>
        <Image src='/github.svg' alt='Connect to my Github' height={35} width={35}/>
    </div>
  )
}

export default ConnectSocMed