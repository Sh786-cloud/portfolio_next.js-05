import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title : "Todo List",
        desc : "A React & Typescript based app for managing tasks.",
        img : "/project_01.png",
        tags : ["Next.JS", "Typescript", "ShadcnUI"]
    },
    {
        id : 1,
        title : "Route Pages",
        desc : "A multiple pages app with next.JS, typescript and tailwindCSS.",
        img : "/project_02.png",
        tags : ["TailwindCSS", "React", "Next.JS"]
    },
    {
        id : 2,
        title : "Props",
        desc : "A component based app built with next.JS & typescript.",
        img : "/project_3.png",
        tags : ["React", "Next.js", "Typescript"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10  md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el)=>(<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          />))}
      </div>
    </div>
  )
}

export default Projects
