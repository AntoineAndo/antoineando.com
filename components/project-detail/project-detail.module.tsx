import React from 'react'
import { contentToHtml, urlFor } from '../../sanity'
import { Project } from '../types/types'
import styles from './project-detail.module.scss'

type Props = {
    project: Project,
    closeProject: Function
}

function ProjectDetail({project, closeProject}: Props) {

    if(project == undefined){
        return <></>
    }

    const projectContent = contentToHtml(project.description);

    return (
        <div className={styles.projectDetail}>
            <div className={styles.header}>
                <h1>{project.title}</h1>
                <span className={styles.close} onClick={()=>closeProject()}>╳</span>
            </div>
            <div className={styles.body}>
                <img src={urlFor(project.mainImage).url()}/>
                <div className={styles.content} dangerouslySetInnerHTML={{__html: projectContent}}>

                </div>
            </div>
        </div>
    )
}

export default ProjectDetail