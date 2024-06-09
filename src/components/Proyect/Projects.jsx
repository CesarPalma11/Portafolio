import React from 'react'
import transition from '../FramerMotion/transition'
import { projectsItems } from '../data'
import './Projects.css'
const Projects = () => {
  return (
    <>
    <div className="title-main">Algunos de mis&nbsp;<span style={{color:'orange', fontWeight:'bold'}}>proyectos</span></div>
    <div className='container-projects'>
      
      <div className="container-grid">
        
        {projectsItems.map((item) => (
          <div key={item.id} >
            <div className='container-desc'>
              <div className="title">{item.title}</div>
                <img src={item.img} alt={item.id} className='image-projects'/>
                <div className="desc">{item.desc}</div>
                <div className="buttons">
                <a href={item.urlGit}>GitHub</a>
                <a href={item.urlDemo}>Demo</a>
                
                </div>
                
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default transition(Projects);