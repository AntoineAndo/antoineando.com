import React from 'react'
import ProjectCard from '../project-card/project-card';
import styles from './page-content.module.scss'

import {contentToHtml} from '../../sanity';

type Props = {
    "currentPage": any, 
    "projects": any,
    "animationIsRunning": boolean
}

function PageContent({currentPage, projects, animationIsRunning}: Props) {

    //Work listing page
    if(currentPage.displayProjects){
        const pageContent = contentToHtml(currentPage.content)
        return (<div className={`${styles.content} ${styles.half} ${animationIsRunning ? styles.hidden: ''}`}>
            <div dangerouslySetInnerHTML={{__html: pageContent}}></div>
            {projects.map((project:any)=>{
                return (<div key={project.slug}><ProjectCard project={project} /></div>)
            })}
        </div>)
    }

    //Regular content page
    if(currentPage.displayContent){
        const pageContent = contentToHtml(currentPage.content)
        return (<div className={`${styles.content} ${styles.half} ${animationIsRunning ? styles.hidden: ''}`} dangerouslySetInnerHTML={{__html: pageContent}}></div>)
    }

    return <></>

}

export default PageContent

