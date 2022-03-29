import React from 'react'
import style from './project-card.module.scss'
import { contentToHtml, urlFor } from '../../sanity'
import { Project } from '../types/types'

type Props = {
    project: Project
}

function ProjectCard({project}: Props) {
  const projectContent = contentToHtml(project.description)
  return (
    <div className={style.projectCard}>
      <img src={urlFor(project.mainImage).url()}/>
      <div className="projectInfo">
        <a href={project.link}>{project.title}</a>
        <p>{project.shortDescription}</p>
      </div>
      {/* <p dangerouslySetInnerHTML={{__html: projectContent}}></p> */}
    </div>
  )
}

export default ProjectCard