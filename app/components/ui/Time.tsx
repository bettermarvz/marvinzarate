import dayjs from 'dayjs'
import React from 'react'

const Time = () => {
  return (
    <div className='absolute right-0 -bottom-[100px] opacity-10'>
        <div className='flex items-end'>
            <div className='[&>p]:text-[384px] font-bold flex flex-col justify-end leading-[350px] align-bottom'>
                <p>{dayjs().format('h')}</p>
                <p>{dayjs().format('mm')}<span className='text-[161px]'>{dayjs().format('A')}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Time