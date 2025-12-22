'use client'

import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const Time = () => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 1000) // update every second

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='absolute right-0 -bottom-[100px] opacity-10'>
        <div className='flex items-end'>
            <div className='[&>p]:text-[384px] font-bold flex flex-col justify-end leading-[350px] align-bottom'>
                <p>{time.format('hh')}</p>
                <p>{time.format('mm')}<span className='text-[161px]'>{time.format('A')}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Time