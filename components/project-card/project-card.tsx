import React from 'react'
import style from './project-card.module.scss'
import { urlFor } from '../../sanity'

type Props = {
    project: any
}

function ProjectCard({project}: Props) {
  return (
    <div className={style.projectCard}>
      <p>{project.title}</p>
      <img src={urlFor(project.mainImage).url()}/>
    </div>
  )
}

export default ProjectCard