import React, { useState } from 'react'
import ProjectCard from '../project-card/project-card';
import styles from './page-content.module.scss'

import {contentToHtml} from '../../sanity';
import Head from 'next/head';
import { Page, Project } from '../types/types';
import ProjectDetail from '../project-detail/project-detail.module';

type Props = {
    "currentPage": Page, 
    "projects": Project[],
    "animationIsRunning": boolean
}

function PageContent({currentPage, projects, animationIsRunning}: Props) {

    const [selectedProject, setSelectedProject] = useState() as [Project, Function];

    function openProject(project: Project) {
        setSelectedProject(project)
    }

    function closeProject() {
        setSelectedProject(undefined);
    }

    //Work listing page
    if(currentPage.displayProjects){
        const pageContent = contentToHtml(currentPage.content)
        return (<>
            <Head>
                <title>{currentPage.name} - Antoine Ando</title>
            </Head>
            
            <div className={`${styles.content} 
                            ${styles.half} 
                            ${animationIsRunning ? styles.hidden: ''}
                            ${(selectedProject != undefined) ? styles.hiddenInstant: ''}`}>
                <div dangerouslySetInnerHTML={{__html: pageContent}}></div>
                {projects.map((project: Project)=>{
                    return (<div key={project.slug}>
                        <ProjectCard project={project} openProject={openProject}/>
                    </div>)
                })}
            </div>
            <ProjectDetail project={selectedProject} closeProject={closeProject} />
        </>)
    }

    //Regular content page
    if(currentPage.displayContent){
        const pageContent = contentToHtml(currentPage.content)
        return (<>
            <Head>
                <title>{currentPage.name} - Antoine Ando</title>
            </Head>
            <div className={`${styles.content} ${styles.half} ${animationIsRunning ? styles.hidden: ''}`}
                dangerouslySetInnerHTML={{__html: pageContent}}></div>
        </>)
    }

    return <></>

}

export default PageContent

