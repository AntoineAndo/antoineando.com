import React from 'react'
import style from './project-card.module.scss'
import { contentToHtml, urlFor } from '../../sanity'
import { Project } from '../types/types'

type Props = {
    project: Project,
    openProject: Function
}

function ProjectCard({project, openProject}: Props) {

  return (
    <div className={style.projectCard}>
      <img src={urlFor(project.mainImage).url()}/>
      <div className="projectInfo">
        <a href={project.link}>{project.title}</a>
        <p>{project.shortDescription}</p>
      </div>
      <span className={style.link} onClick={()=>openProject(project)}>{`<read more>`}</span>
    </div>
  )
}

export default ProjectCard