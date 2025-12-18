import Image from 'next/image'
import React from 'react'

const WorkItem = ({
    ImageUrl='',
    title,
    date,
    description,
    icons=[]
}:{
    ImageUrl: string
    title: string
    date: string
    description: string
    icons: string[]
}) => {
  return (
    <div className='flex gap-6 w-full'>
        <div className='w-fit'><Image src={ImageUrl} alt="work item" width={263.38} height={141.63} /></div>
        <div className='w-1/2 flex-col justify-start [&>p]:text-left'>
            <p className='font-bold '>{title}</p>
            <p className='font-bold text-[10px]'>{date}</p>
            <p className='text-xs'>{description}</p>
            <div className='flex gap-4 mt-3 h-5'>{icons?.map((item, i)=>(
                <Image key={i} src={`/icons/white/${item}-icon.svg`} alt='icon' width={20} height={20}/>
            ))}</div>
        </div>
    </div>
  )
}

export default WorkItem