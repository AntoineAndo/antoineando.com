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
      <div className={style.projectInfo}>
        <p>
          <a href={project.link}>{project.title}</a>
        </p>
        <p>{project.shortDescription}</p>
        <p className={style.link} onClick={()=>openProject(project)}>{`<read more>`}</p>
      </div>
    </div>
  )
}

export default ProjectCard