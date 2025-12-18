import React from 'react'
import WorkItem from './ui/WorkItem'

const current = [
  {
    title: 'Betterteem Web App',
    date: '2022 - Present',
    description: 'As the UI Designer & Frontend Developer, I created intuitive and visually engaging user interfaces, ensuring a seamless user experience from design to implementation. My role included crafting design systems, building responsive layouts, and collaborating with developers to integrate designs with backend APIs.',
    icons: ['tailwind','nextjs','typescript', 'git', 'figma'],
    ImageUrl:'/works/betterteem-web-app.png'
  },
  {
    title: 'Betterteem Website',
    date: '2022 - Present',
    description: 'Redesigned and rebuilt the company’s website on Webflow, focusing on a modern, user-friendly interface and consistent brand identity.',
    icons: ['webflow','javascript'],
    ImageUrl:'/works/betterteem-web-site.png'
  }
]

const personal = [
  {
    title: 'DevLink',
    date: '',
    description: 'DevLink (MVP) is a Progressive Web App (PWA) that lets developers create a single, shareable profile for all their important links such as GitHub, LinkedIn, portfolios, and coding platforms.',
    icons: ['tailwind','nextjs','typescript', 'git', 'figma'],
    ImageUrl:'/works/devLink.png'
  }
]

const previous = [
  {
    title: 'Taxikel',
    date: '2020 - 2021',
    description: 'My role focused on designing a user-friendly mobile and web interface that simplified order placement, route tracking, and community store management.',
    icons: ['git', 'figma', 'w3-css', 'reactjs'],
    ImageUrl:'/works/taxikel.png'
  },
  {
    title: 'Guanzon',
    date: '2018 - 2019',
    description: 'As a Graphic Designer, I Created marketing and branding materials for retail and dealership operations, strengthening my foundation in visual design, brand consistency, and promotional graphics.',
    icons: [],
    ImageUrl:'/works/guanzon.png'
  }
]

const WorkSection = () => {
  return (
    <section id='projects' className=' bg-[#13505B] justify-center flex py-32'>
      <div className='flex flex-col w-3/5 gap-10'>
        <div className='text-white text-left '>
          <p className='text-2xl'>Current Work</p>
          <div className='flex gap-10 mt-4'>
            {current.map((item, i)=>(
              <WorkItem
              key={i}
              title={item.title}
              date={item.date}
              description={item.description}
              icons={item.icons}
              ImageUrl={item.ImageUrl}
            />
            ))}
          </div>
        </div>
        <div className='text-white text-left '>
          <p className='text-2xl'>Personal Project</p>
          <div className='flex gap-10 mt-4'>
            {personal.map((item, i)=>(
              <WorkItem
              key={i}
              title={item.title}
              date={item.date}
              description={item.description}
              icons={item.icons}
              ImageUrl={item.ImageUrl}
            />
            ))}
          </div>
        </div>
        <div className='text-white text-left '>
          <p className='text-2xl'>Previous Work</p>
          <div className='flex gap-10 mt-4'>
            {previous.map((item, i)=>(
              <WorkItem
              key={i}
              title={item.title}
              date={item.date}
              description={item.description}
              icons={item.icons}
              ImageUrl={item.ImageUrl}
            />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection