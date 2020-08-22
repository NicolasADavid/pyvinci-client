import React from 'react';
import styles from './ProjectsList.css'
import ProjectsListProject from './ProjectsListProject/ProjectsListProject';

export default function ProjectsList({projects}) {

    const projectsListProjects = projects?.map((project, index) =>
        <ProjectsListProject
            key={index}
            project={project}
        />
    );

    return (
        <div className={styles.container}>    
            List of projects: 
            {projects?.length ? 
                <div>
                    {projectsListProjects}
                </div>
                :
                <div>
                    No projects available to display
                </div>
            }
        </div>
    )
};